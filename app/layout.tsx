import type { Metadata } from "next";
import { Archivo, Geist, Geist_Mono, Urbanist } from "next/font/google";
import { clashDisplay } from "./fonts";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Megan Manicom | Social Media Marketing & Creative Strategy",
    template: "%s | Megan Manicom",
  },
  description:
    "Megan Manicom helps authors, coaches, creators, and growing brands build visibility through social media marketing, content, and thoughtful strategy.",
};

export const ensureStatic = "navigation";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${clashDisplay.variable} ${urbanist.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
