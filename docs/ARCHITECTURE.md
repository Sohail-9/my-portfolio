# Banking Transaction Pipeline & Reconciliation Warehouse
## Architecture & Technical Specifications

This document outlines the distributed data architecture, dimensional modeling choices, and state-management guarantees of the financial transaction pipeline.

---

## 1. High-Level System Architecture

```
[Simulated Core Banking Stream]
               │
               ▼
   [Raw Staging Ingestion]  <── Schema-on-Read Validation
               │
               ▼
    [Apache Spark / PySpark]  <── In-Memory Deduplication & Anomaly Filtering
               │
               ▼
    [Apache Airflow DAG]   <── Stored Watermark Tracking & Task Retries
        ┌──────┴──────┐
        ▼             ▼
[SCD Type 2 Merge] [Fact Table Upsert]
(dim_accounts)    (fact_transactions)
        └──────┬──────┘
               ▼
[Automated SQL Reconciliation Gate]  <── Source vs Target Parity (Count/Sum)
               │
               ▼
   [pgvector Embeddings Layer]     <── Document Chunking & Hybrid Retrieval
               │
               ▼
 [LLM Analytics / Tool Calling]     <── Deterministic SQL Grounding
```

---

## 2. Dimensional Data Modeling (Star Schema)

The warehouse is designed for financial compliance, historical tracking, and low-latency analytical queries.

### Dimensions
* **`dim_accounts` (SCD Type 2):**
  * Tracks historical changes in account status, tier, credit limit, and risk score.
  * Fields: `account_sk` (surrogate key), `account_id` (natural key), `account_tier`, `risk_score`, `valid_from`, `valid_to`, `is_current`.
  * Guarantees auditability: Any point-in-time regulatory query resolves account state at the exact second the transaction occurred.

* **`dim_merchants` (SCD Type 1):**
  * Maintains current merchant profile, merchant category code (MCC), and risk category.
  * Overwritten on change as historical merchant categorization is not required for auditing.

### Fact Table
* **`fact_transactions`:**
  * Grain: One row per discrete monetary transaction event.
  * Measures: `amount_cents` (exact integer representation to prevent floating-point inaccuracies), `fee_cents`, `interchange_fee`.
  * Foreign Keys: `account_sk`, `merchant_sk`, `date_key`, `time_key`.
  * Degenerate Dimensions: `transaction_id` (UUID), `authorization_code`, `status`.

---

## 3. Idempotency & Fault-Tolerance Guarantees

1. **Stored Watermark Tracking (`etl_watermarks`):**
   * Each batch job records the maximum `created_at` timestamp successfully processed.
   * On rerun or backfill, jobs query `SELECT watermark_value FROM etl_watermarks WHERE pipeline_name = 'banking_etl'` to ingest only delta records.
2. **Atomic Idempotent Upserts:**
   * Fact ingestion uses PostgreSQL `INSERT ... ON CONFLICT (transaction_id) DO NOTHING` to guarantee that duplicate re-runs of a batch never inflate transaction counts.
3. **Automated SQL Reconciliation Checks:**
   * Post-load tasks assert:
     $$\sum \text{source\_amounts} == \sum \text{warehouse\_amounts}$$
     $$\text{count(source\_records)} == \text{count(warehouse\_records)}$$
   * Any variance $> 0$ immediately halts downstream reporting and triggers an alert.

---

## 4. Conversational RAG Analytics Layer

* **Vector Store:** PostgreSQL with `pgvector` extension.
* **Hybrid Retrieval:** Dense cosine similarity over transaction embeddings combined with sparse BM25 / keyword full-text search.
* **SQL Grounding:** Natural-language questions (e.g., *"Which merchant category had the highest fraud velocity in Q3?"*) trigger an LLM tool call that emits a parameter-checked SQL query against `fact_transactions` before generating conversational summaries.
