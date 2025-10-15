import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Arthachain - India's Hyper-Scalable Blockchain",
  description: "India's first socially verified blockchain with 22M+ TPS. Built to scale, designed to trust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ErrorReporter />
        {/* Desktop Navbar - visible on large screens */}
        <div className="hidden lg:block">
          <Navbar />
        </div>
        {/* Mobile Sidebar - visible on small/medium screens */}
        <Sidebar />
        {/* Main content - full width on all screens, with top padding for navbar on desktop */}
        <main className="w-full lg:pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}