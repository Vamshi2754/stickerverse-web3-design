import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Arthachain - India's Fastest Socially-Verified Blockchain | 22M+ TPS",
  description: "India's first socially verified Layer 1 blockchain combining AI-driven consensus, social trust, and parallel processing for 22M+ TPS. Built to scale, designed to trust.",
  keywords: [
    "blockchain",
    "Layer 1",
    "Web3",
    "DeFi",
    "India blockchain",
    "SVCP",
    "AI consensus",
    "22M TPS",
    "socially verified",
    "Arthachain",
    "decentralized",
    "smart contracts"
  ],
  authors: [{ name: "Arthachain Team" }],
  creator: "Arthachain",
  publisher: "Arthachain",
  metadataBase: new URL("https://arthachain.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arthachain.com",
    title: "Arthachain - India's Fastest Socially-Verified Blockchain",
    description: "Next-gen Layer 1 blockchain combining social trust, AI-driven consensus, and parallel processing for 22M+ TPS performance.",
    siteName: "Arthachain",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arthachain - India's Fastest Blockchain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arthachain - India's Fastest Socially-Verified Blockchain",
    description: "Next-gen Layer 1 blockchain with 22M+ TPS. AI-powered consensus meets social trust.",
    images: ["/og-image.png"],
    creator: "@arthachain",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1E4BFF" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="antialiased">
        <ErrorReporter />
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 btn-primary px-4 py-2"
        >
          Skip to main content
        </a>
        
        {/* Desktop Navbar - visible on large screens */}
        <header className="hidden lg:block" role="banner">
          <Navbar />
        </header>
        
        {/* Mobile Sidebar - visible on small/medium screens */}
        <Sidebar />
        
        {/* Main content - full width on all screens, with top padding for navbar on desktop */}
        <main id="main-content" role="main" className="w-full lg:pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}