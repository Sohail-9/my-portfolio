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
  title: "Sohail Shaik | Software Engineer",
  description:
    "Software engineer building FastAPI services, RAG pipelines, and Kubernetes-native systems with a focus on observability and developer velocity.",
  openGraph: {
    title: "Sohail Shaik | Software Engineer",
    description:
      "Software engineer focused on FastAPI, async systems, RAG, and Kubernetes—crafting resilient infra and AI developer platforms.",
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
    title: "Sohail Shaik | Software Engineer",
    description:
      "Building scalable FastAPI services, RAG intelligence, and Kubernetes-native platforms that ship faster and safer.",
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
