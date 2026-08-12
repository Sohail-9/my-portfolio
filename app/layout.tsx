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
  title: "Sohail Shaik | DevOps & Cloud Infrastructure Engineer",
  description:
    "DevOps and Cloud Infrastructure Engineer with 4+ years of experience building CI/CD pipelines, containerizing workloads, and managing production Kubernetes across AWS & Azure.",
  openGraph: {
    title: "Sohail Shaik | DevOps & Cloud Infrastructure Engineer",
    description:
      "DevOps and Cloud Infrastructure Engineer focused on Amazon EKS, Terraform, zero-downtime migrations, and production observability stacks.",
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
    title: "Sohail Shaik | DevOps & Cloud Infrastructure Engineer",
    description:
      "Orchestrating production Kubernetes, automated GitOps pipelines, and high-availability multi-cloud infrastructure.",
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
