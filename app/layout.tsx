import type { Metadata } from "next";
import "./globals.css";
import { Inter, Space_Grotesk, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import { SpotlightCursor } from "@/components/spotlight-cursor";
import { ScrollProgress } from "@/components/scroll-progress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sohailshaik.me"),
  title: "Sohail Shaik | Full-Stack AI Engineer",
  description:
    "Full-stack AI engineer with 3+ years building production systems across React/Next.js, Node.js, Python, and PostgreSQL, focusing on LLM orchestration, Multi-Agent DAGs, and RAG pipelines. Founding engineer at PrettiFlow (100k+ users, 8k+ DAU).",
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} antialiased min-h-screen selection:bg-purple-500/20 selection:text-purple-900`}
        style={{ backgroundColor: "#f6f5ff" }}
      >
        <ScrollProgress />
        <SpotlightCursor />
        {children}
      </body>
    </html>
  );
}
