import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio Website",
  description: "Portfolio of Alif Fajdhan Yudhistiro, an Informatics Engineering Student and Fullstack Web Developer focusing on AI-Assisted Development.",
  openGraph: {
    title: "My Portfolio Website",
    description: "Informatics Engineering Student | Fullstack Web Developer | AI-Assisted Development",
    url: "https://alif-portfolio.vercel.app",
    siteName: "Alif Portfolio",
    locale: "id_ID",
    type: "website",
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} antialiased scroll-smooth`} suppressHydrationWarning>
      <body suppressHydrationWarning className="min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
