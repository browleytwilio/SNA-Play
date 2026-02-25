import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SNA APAC Market Intelligence Report | Interactive Playbook",
  description: "Enterprise Sales Strategy & Research Report",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-800 antialiased selection:bg-blue-100 selection:text-blue-900`}>
        {children}
      </body>
    </html>
  );
}
