import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { SpotlightCursor } from "@/components/spotlight-cursor";
import { ScrollProgress } from "@/components/scroll-progress";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sohailshaik.me"),
  title: "Sohail Shaik | Full-Stack AI Engineer",
  description:
    "Full-stack AI engineer with 3+ years building production systems across React/Next.js, Node.js, Python, and PostgreSQL, with a focus on LLM orchestration and RAG pipelines. Founding engineer at PrettiFlow (4,000+ beta users).",
  openGraph: {
    title: "Sohail Shaik | Full-Stack AI Engineer",
    description:
      "Full-stack AI engineer building production systems across React/Next.js, Node.js, Python, and PostgreSQL, focusing on LLM orchestration, Multi-Agent DAGs, and RAG pipelines.",
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
    title: "Sohail Shaik | Full-Stack AI Engineer",
    description:
      "Full-stack AI engineer building production AI applications, multi-agent systems, Next.js 15, and pgvector RAG pipelines.",
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
    <html lang="en" className={cn("light", geist.variable)}>
      <body className="bg-white text-slate-900 antialiased font-sans selection:bg-sky-500/20 selection:text-sky-900">
        <ScrollProgress />
        <SpotlightCursor />
        {children}
      </body>
    </html>
  );
}
