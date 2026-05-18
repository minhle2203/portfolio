import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://portfolio-kappa-ten-45wunrkzan.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Minh Le — Product Manager",
    template: "%s",
  },
  description:
    "Product Manager portfolio — turning problems into shipped solutions. 8 years building software across workforce platforms, B2B marketplaces, and loyalty marketing.",
  keywords: [
    "Product Manager",
    "Product Owner",
    "Minh Le",
    "Portfolio",
    "Vietnam",
    "Weploy",
    "Kilo",
  ],
  authors: [{ name: "Minh Le Hong Anh" }],
  creator: "Minh Le Hong Anh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Minh Le — Product Manager",
    title: "Minh Le — Product Manager",
    description:
      "Product Manager portfolio — turning problems into shipped solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minh Le — Product Manager",
    description:
      "Product Manager portfolio — turning problems into shipped solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  );
}
