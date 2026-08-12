import { links } from "./links";

export type ExperienceEntry = {
  company: string;
  role: string;
  timeframe: string;
  bullets: string[];
  logo?: string;
  tech?: string[];
};

export type Skill = {
  key: string;
  label: string;
  category: "Cloud & Containers" | "IaC & CI/CD" | "Observability & Security" | "Scripting & Data";
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  subtitle: string;
  bullets: string[];
  tech: string[];
  links: ProjectLink[];
  image?: string;
};

export const hero = {
  title: "Hello, I’m Sohail Shaik",
  subtitle: "DevOps Engineer – Cloud Infrastructure, CI/CD & Kubernetes"
};

export const about = {
  heading: "About me",
  body:
    "DevOps and Cloud Infrastructure Engineer with 4+ years of production experience building and maintaining high-performance CI/CD pipelines, containerizing services, and running production-grade Kubernetes clusters (Amazon EKS, Helm) across AWS, Azure, and Cloudflare. Hands-on expert in Infrastructure as Code (Terraform), Linux networking, and automation scripting. Passionate about architecting zero-downtime migrations, secure ingress routing, and automated self-healing systems.",
  specializations: [
    {
      title: "Cloud & Kubernetes",
      description: "Provisioning multi-region landing zones on AWS and Azure. Orchestrating scalable services with Kubernetes, Helm charts, and custom ingress configs."
    },
    {
      title: "IaC & CI/CD Pipelines",
      description: "Implementing reproducible infrastructure using Terraform. Designing automated, secure build-test-deploy pipelines via GitHub Actions."
    },
    {
      title: "Observability & Ingress",
      description: "Configuring metrics collection (Prometheus, Grafana) and secure edge routing with Traefik, WireGuard VPNs, and active secrets management."
    }
  ]
};

export const skills: Skill[] = [
  // Cloud & Containers
  { key: "aws", label: "AWS (EKS, VPC, ECS, S3)", category: "Cloud & Containers" },
  { key: "azure", label: "Azure", category: "Cloud & Containers" },
  { key: "cloudflare", label: "Cloudflare", category: "Cloud & Containers" },
  { key: "docker", label: "Docker", category: "Cloud & Containers" },
  { key: "kubernetes", label: "Kubernetes", category: "Cloud & Containers" },
  { key: "helm", label: "Helm", category: "Cloud & Containers" },
  { key: "swarm", label: "Docker Swarm", category: "Cloud & Containers" },

  // IaC & CI/CD
  { key: "terraform", label: "Terraform", category: "IaC & CI/CD" },
  { key: "githubactions", label: "GitHub Actions", category: "IaC & CI/CD" },
  { key: "cicd", label: "CI/CD Pipelines", category: "IaC & CI/CD" },
  { key: "automation", label: "Infra Automation", category: "IaC & CI/CD" },

  // Observability & Security
  { key: "prometheus", label: "Prometheus", category: "Observability & Security" },
  { key: "grafana", label: "Grafana", category: "Observability & Security" },
  { key: "alertmanager", label: "Alertmanager", category: "Observability & Security" },
  { key: "cloudwatch", label: "CloudWatch", category: "Observability & Security" },
  { key: "traefik", label: "Traefik", category: "Observability & Security" },
  { key: "tls", label: "TLS/SSL Termination", category: "Observability & Security" },
  { key: "wireguard", label: "WireGuard VPN", category: "Observability & Security" },
  { key: "secrets", label: "Secrets Management", category: "Observability & Security" },

  // Scripting & Data
  { key: "python", label: "Python", category: "Scripting & Data" },
  { key: "bash", label: "Bash Scripting", category: "Scripting & Data" },
  { key: "linux", label: "Linux Systems", category: "Scripting & Data" },
  { key: "postgres", label: "PostgreSQL", category: "Scripting & Data" },
  { key: "redis", label: "Redis", category: "Scripting & Data" },
  { key: "git", label: "Git / GitHub", category: "Scripting & Data" }
];

export const experience: ExperienceEntry[] = [
  {
    company: "PrettiFlow",
    role: "Founding Engineer – DevOps & Infrastructure",
    timeframe: "January 2026 – Present",
    logo: "/pretti.png",
    tech: ["AWS", "Azure", "Cloudflare", "Docker", "GitHub Actions", "Python", "Bash"],
    bullets: [
      "Owned the end-to-end DevOps lifecycle as sole infrastructure owner, architecting and managing multi-cloud infrastructure across AWS, Azure, and Cloudflare.",
      "Built and maintained CI/CD pipelines end to end: containerized services with Docker and automated deployments using GitHub Actions.",
      "Engineered pre-warmed, isolated cloud sandboxes for code execution, cutting infrastructure cold-start latency from ~3s to ~100ms (97% improvement).",
      "Redesigned edge routing and ingress configuration to remove a redundant API gateway, eliminating hundreds of dollars a month in idle infrastructure cost.",
      "Maintained 99.9% uptime across core infrastructure through proactive monitoring, alerting, and incident response."
    ]
  },
  {
    company: "OmniqAI",
    role: "DevOps Engineer",
    timeframe: "August 2024 – December 2025",
    logo: "/Omniqai.png",
    tech: ["AWS", "EKS", "Terraform", "Helm", "Docker Swarm", "Prometheus", "Grafana", "Traefik", "WireGuard"],
    bullets: [
      "Led an on-prem → AWS migration using Terraform and Amazon EKS, enabling zero-downtime deployments and fully automated CI/CD pipelines.",
      "Performed end-to-end Kubernetes operations: Helm chart deployments, readiness/liveness probe configuration, and resolving ImagePullBackOff and pod scheduling issues.",
      "Built observability stacks with Prometheus, Grafana, and Alertmanager across Docker Swarm and edge nodes, reducing incident detection time by 50%.",
      "Hardened CI/CD and ingress: stabilized TLS termination with Traefik, managed cluster secrets, and strengthened deployment security posture.",
      "Deployed WireGuard for secure remote connectivity and used Elasticflow (NetFlow) and Suricata (IDS/IPS) for network traffic analysis and threat detection."
    ]
  },
  {
    company: "MountPoint Technologies Pvt. Ltd.",
    role: "DevOps Engineer",
    timeframe: "July 2022 – July 2024",
    tech: ["AWS", "Docker", "Kubernetes", "CI/CD", "Linux Servers", "Monitoring", "Logging"],
    bullets: [
      "Managed and deployed applications across AWS cloud infrastructure.",
      "Containerized applications using Docker and managed production deployments.",
      "Worked with Kubernetes for application deployment, scaling, and service management.",
      "Built and maintained CI/CD pipelines for automated build, test, and deployment workflows.",
      "Managed cloud infrastructure, environments, configuration, and deployment processes.",
      "Worked with Linux servers, troubleshooting application and infrastructure issues.",
      "Implemented monitoring and logging to track application and infrastructure health."
    ]
  }
];

export const projects: Project[] = [
  {
    title: "AWS-EKS-GitOps",
    subtitle: "Cloud Native EKS Landing Zone & GitOps Pipeline",
    bullets: [
      "Designed and provisioned a production-ready Amazon EKS landing zone using Terraform with secure VPC peering, public/private subnets, and IAM Roles for Service Accounts (IRSA).",
      "Established automatic cert provisioning and TLS termination using Traefik and Cert-Manager, ensuring secure external endpoints.",
      "Built multi-environment GitOps CD pipelines via GitHub Actions and Helm, supporting rollback mechanics and lint checks.",
      "Secured cluster networking with WireGuard VPN for private API access and automated secret injection from AWS Secrets Manager."
    ],
    tech: [
      "AWS",
      "EKS",
      "Terraform",
      "Helm",
      "Traefik",
      "GitHub Actions",
      "WireGuard"
    ],
    links: [
      { label: "View repo", href: "https://github.com/Sohail-9" }
    ]
  },
  {
    title: "Cluster-Observability",
    subtitle: "Production Observability & Auto-Healing Cluster",
    bullets: [
      "Built cluster-wide Prometheus, Grafana, and Alertmanager metrics-monitoring stacks across Amazon EKS, Docker Swarm, and edge nodes.",
      "Decreased incident response times and mean time to detect (MTTD) by 50% through refined Alertmanager routing and PagerDuty integrations.",
      "Engineered automated self-healing scripts reacting to Prometheus node/pod alerts to resolve scheduling issues and ImagePullBackOff errors.",
      "Configured Horizontal Pod Autoscalers (HPA) and cluster-autoscaler rules to handle production traffic bursts smoothly."
    ],
    tech: [
      "Kubernetes",
      "Prometheus",
      "Grafana",
      "Alertmanager",
      "Docker Swarm",
      "Bash Scripting"
    ],
    links: [
      { label: "View repo", href: "https://github.com/Sohail-9" }
    ]
  }
];
