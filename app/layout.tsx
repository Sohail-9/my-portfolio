import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
        alt: "Portrait of Sohail Shaik"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sohail Shaik | Software Engineer",
    description:
      "Building scalable FastAPI services, RAG intelligence, and Kubernetes-native platforms that ship faster and safer.",
    images: ["/sohail.jpeg"]
  },
  icons: {
    icon: "/sk-logo.svg",
    shortcut: "/sk-logo.svg",
    apple: "/sk-logo.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
