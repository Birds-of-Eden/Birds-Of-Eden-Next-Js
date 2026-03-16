import type { Metadata } from "next";
import { Tiro_Bangla, Inter, Amiri } from "next/font/google";
import { getLocale } from "next-intl/server";
import "@splidejs/react-splide/css";
import "./globals.css";

import { ThemeProvider } from "@/providers/theme-provider";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { unstable_ViewTransition as ViewTransition } from "react";
import { cn } from "@/lib/utils";
import StructuredData from "@/components/StructuredData";

// Bangla
const tiroBangla = Tiro_Bangla({
  weight: ["400"],
  subsets: ["bengali"],
  display: "swap",
});

// English
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// Arabic
const amiri = Amiri({
  weight: ["400", "700"],
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_BASE_URL
    ? new URL(process.env.NEXT_PUBLIC_BASE_URL)
    : new URL("http://localhost:3000"),
  appleWebApp: {
    title: "BirdsOfEden",
    capable: true,
    statusBarStyle: "default",
  },
  title: {
    default: "Birds of Eden - Innovative Software Solutions",
    template: "%s | Birds of Eden - A cutting-edge software solution company",
  },
  description:
    "Birds of Eden is a cutting-edge software company dedicated to transforming ideas into reality through innovative technology solutions. We specialize in web development, mobile apps, and custom software solutions.",
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "custom software solutions",
    "technology consulting",
    "Birds of Eden",
    "software company",
    "IT solutions",
    "digital transformation"
  ],
  authors: [{ name: "Birds of Eden" }],
  creator: "Birds of Eden",
  publisher: "Birds of Eden",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      bn: "/bn",
      ar: "/ar",
    },
  },
  openGraph: {
    title: "Birds of Eden - Innovative Software Solutions",
    description:
      "Birds of Eden is a cutting-edge software company dedicated to transforming ideas into reality through innovative technology solutions. We specialize in web development, mobile apps, and custom software solutions.",
    type: "website",
    url: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    siteName: "Birds of Eden",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Birds of Eden - Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Birds of Eden - Innovative Software Solutions",
    description:
      "Transforming ideas into reality through innovative technology solutions. Specializing in web development, mobile apps, and custom software.",
    images: ["/opengraph-image"],
    creator: "@birdsofeden",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "o-1WgBEe_6vhhBeVMTFL7Le57BidAd8rCDf22AQ2CLQ",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={cn("antialiased", {
          [tiroBangla.className]: locale === "bn",
          [inter.className]: locale === "en",
          [amiri.className]: locale === "ar",
        })}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NuqsAdapter>
            <ViewTransition>{children}</ViewTransition>
          </NuqsAdapter>
        </ThemeProvider>
      </body>
    </html>
  );
}
