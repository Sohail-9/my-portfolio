import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { SpotlightCursor } from "@/components/spotlight-cursor";
import { FloatingNav } from "@/components/floating-nav";
import { ScrollProgress } from "@/components/scroll-progress";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sohailshaik.me"),
  title: "Sohail Shaik | Data & AI Engineer",
  description:
    "Data & AI Engineer with 3+ years building production data pipelines, dimensional warehouses (Star Schema / SCD Type 2), Apache Airflow, Spark, and enterprise RAG systems.",
  openGraph: {
    title: "Sohail Shaik | Data & AI Engineer",
    description:
      "Data & AI Engineer specializing in SQL, Apache Airflow, Spark, dimensional warehouse modeling (Star Schema / SCD Type 2), and enterprise RAG & LLM pipelines.",
    type: "website",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 627,
        alt: "Portrait of Sohail Shaik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sohail Shaik | Data & AI Engineer",
    description:
      "Data & AI Engineer building production ETL pipelines, Spark, Airflow, star schema warehouses, and enterprise RAG architectures.",
    images: ["/profile.png"],
  },
  icons: {
    icon: "/sk-logo.svg",
    shortcut: "/sk-logo.svg",
    apple: "/sk-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("dark", geist.variable)}>
      <body className="bg-slate-950 text-slate-100 antialiased font-sans selection:bg-sky-500/30 selection:text-sky-200">
        <ScrollProgress />
        <SpotlightCursor />
        <FloatingNav />
        {children}
      </body>
    </html>
  );
}
