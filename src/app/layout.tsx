import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AOSInit } from "./_components/aos-init";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "Fernanda Mel | Sabão Caseiro Artesanal",
  description: "Sabão caseiro de alta qualidade, feito com ingredientes naturais. Sustentável, econômico e perfeito para o seu lar.",
  keywords: ["sabão caseiro", "produtos naturais", "limpeza sustentável", "Fernanda Mel"],
  authors: [{ name: "Fernanda Mel" }],
  robots: "index, follow",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <div className="flex-grow flex flex-col min-h-screen">
          {children}
        </div>
        <AOSInit />
      </body>
    </html>
  );
}
