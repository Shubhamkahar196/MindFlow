import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from '@/components/Footer'
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MindFlow",
  description: "MindFlow is a productivity tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-screen w-screen overflow-hidden antialiased`}
    >
      <body className="h-full w-full bg-slate-950 text-slate-100 flex flex-col relative select-none">
        <Navbar />
        {/* main view fits inside screen perfectly minus navbar and floating footer spacing */}
        <main className="flex-1 flex flex-col items-center justify-center p-4 pb-28 overflow-hidden relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}