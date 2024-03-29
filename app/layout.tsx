import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rutwik Kashid",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className=" bg-slate-900 overflow-x-hidden text-white" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
