import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Gold Heart Homes | Premium Kitchen & Bathroom Remodeling | Kansas City, MO",
  description:
    "Architect-led residential remodeling in Kansas City. Design-forward kitchens, bathrooms, and whole-home renovations. Trusted by homeowners for premium results, transparent pricing, and clean build processes.",
  keywords: [
    "kitchen remodeling Kansas City",
    "bathroom remodeling Kansas City",
    "home remodeling Kansas City",
    "architect-led remodeling",
    "premium home renovation",
    "Kansas City remodeling contractor",
  ],
  authors: [{ name: "Gold Heart Homes" }],
  openGraph: {
    title: "Gold Heart Homes | Premium Remodeling | Kansas City, MO",
    description:
      "Architect-led residential remodeling in Kansas City. Design-forward kitchens, bathrooms, and whole-home renovations.",
    type: "website",
    locale: "en_US",
    siteName: "Gold Heart Homes",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://goldhearthomes.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
