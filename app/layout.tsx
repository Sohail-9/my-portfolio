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
  title: "Sohail Shaik | Full-Stack AI Engineer",
  description:
    "Full-stack AI engineer with 3+ years building production systems. Specializing in React / Next.js, Node.js, Python, PostgreSQL, LLM orchestration, and RAG pipelines.",
  openGraph: {
    title: "Sohail Shaik | Full-Stack AI Engineer",
    description:
      "Full-stack AI engineer with 3+ years building production systems. Specializing in React / Next.js, Node.js, Python, PostgreSQL, LLM orchestration, and RAG pipelines.",
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
    title: "Sohail Shaik | Full-Stack AI Engineer",
    description:
      "Full-stack AI engineer building AI platforms from scratch, LLM orchestration, RAG pipelines, sandboxed execution, and production distributed systems.",
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
      <body className="bg-slate-950 text-slate-100 antialiased font-sans selection:bg-sky-500/30 selection:text-sky-200">
        <ScrollProgress />
        <SpotlightCursor />
        <FloatingNav />
        {children}
      </body>
    </html>
  );
}
