import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { clashDisplay } from "./fonts";
import "./globals.css";
import "lenis/dist/lenis.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://meganmanicom.com"),
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
      className={`${clashDisplay.variable} ${urbanist.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
