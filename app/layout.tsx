import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sohail Shaik | Backend Engineer",
  description:
    "Backend engineer building FastAPI services, RAG pipelines, and Kubernetes-native systems with a focus on observability and developer velocity.",
  openGraph: {
    title: "Sohail Shaik | Backend Engineer",
    description:
      "Backend engineer focused on FastAPI, async systems, RAG, and Kubernetes—crafting resilient infra and AI developer platforms.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 627,
        alt: "Portrait of Sohail Shaik"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sohail Shaik | Backend Engineer",
    description:
      "Building scalable FastAPI services, RAG intelligence, and Kubernetes-native platforms that ship faster and safer.",
    images: ["https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=1200&q=80"]
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
