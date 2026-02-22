import type { Metadata } from "next";
import { Tiro_Bangla, Inter, Amiri } from "next/font/google";
import { getLocale } from "next-intl/server";
import "@splidejs/react-splide/css";
import "./globals.css";

import { ThemeProvider } from "@/providers/theme-provider";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { unstable_ViewTransition as ViewTransition } from "react";
import { cn } from "@/lib/utils";

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
  metadataBase: process.env.NEXT_PUBLIC_BASE_URL ? new URL(process.env.NEXT_PUBLIC_BASE_URL) : new URL("http://localhost:3000"),
  appleWebApp: {
    title: "BirdsOfEden",
  },
  title: {
    default: "Birds of Eden",
    template: "%s | Birds of Eden - A cutting-edge software solution company",
  },
  description:
    "Birds of Eden is a cutting-edge software company dedicated to transforming ideas into reality through innovative technology solutions",
  openGraph: {
    title: "Birds of Eden - A cutting-edge software solution company",
    description:
      "Birds of Eden is a cutting-edge software company dedicated to transforming ideas into reality through innovative technology solutions",
    type: "website",
    url: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    siteName: "Birds of Eden",
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
