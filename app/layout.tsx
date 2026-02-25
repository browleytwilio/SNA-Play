import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "SNA APAC Market Intelligence Report | Interactive Playbook",
  description: "Enterprise Sales Strategy & Research Report for Silent Network Authentication in APAC markets",
  keywords: ["SNA", "Authentication", "APAC", "Market Intelligence", "Silent Network Authentication"],
  authors: [{ name: "SNA Play" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sna-play.vercel.app",
    title: "SNA APAC Market Intelligence Report",
    description: "Interactive playbook for Silent Network Authentication in Asia-Pacific",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-slate-50 text-slate-800 antialiased selection:bg-blue-100 selection:text-blue-900`}
      >
        {children}
      </body>
    </html>
  );
}
