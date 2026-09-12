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
  title: "Sohail Shaik | Backend & AI Software Engineer",
  description:
    "Backend Engineer with 4+ years of experience building and scaling production backend systems, Python/FastAPI services, LLM orchestration, RAG pipelines, and multi-agent platforms.",
  openGraph: {
    title: "Sohail Shaik | Backend & AI Software Engineer",
    description:
      "Founding & Backend Engineer specializing in Python/FastAPI, multi-agent AI architectures, RAG pipelines, pgvector, and distributed cloud systems.",
    type: "website",
    images: [
      {
        url: "/sohail.jpeg",
        width: 1200,
        height: 627,
        alt: "Portrait of Sohail Shaik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sohail Shaik | Backend & AI Software Engineer",
    description:
      "Building high-performance Python/FastAPI services, multi-agent orchestration platforms, and AI application generation infrastructure.",
    images: ["/sohail.jpeg"],
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
      <body className="bg-slate-950 text-slate-100 antialiased font-sans">
        <ScrollProgress />
        <SpotlightCursor />
        <FloatingNav />
        {children}
      </body>
    </html>
  );
}
