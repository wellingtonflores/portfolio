import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wellington Flores | Data Portfolio",
  description: "Portfólio de Análise de Dados & Business Intelligence por Wellington Flores. Projetos de ETL automatizados com Python, manipulação com Pandas, modelagem SQL e dashboards interativos com Power BI.",
  keywords: ["Wellington Flores", "Análise de Dados", "BI", "Power BI", "Python", "Pandas", "SQL", "Data Analyst", "Dashboard", "ETL"],
  authors: [{ name: "Wellington Flores" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground bg-grid-tech bg-glow-spot relative selection:bg-cyan-neon/30 overflow-x-hidden">
        <Navbar />
        <main className="flex-1 flex flex-col pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
