import type { Metadata } from "next";
import { routing, type Locale } from "@/i18n/routing";

const FALLBACK_BASE_URL = "http://localhost:3000";
const SITE_NAME = "Birds Of Eden";
const DEFAULT_OG_IMAGE = "/opengraph-image.jpeg";

type BuildLocalizedSeoMetadataInput = {
  locale: string;
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  type?: "website" | "article";
  image?: string;
  noIndex?: boolean;
};

const normalizeBaseUrl = () => {
  const base = process.env.NEXT_PUBLIC_BASE_URL || FALLBACK_BASE_URL;
  return base.endsWith("/") ? base.slice(0, -1) : base;
};

const normalizePath = (path: string) => {
  if (!path) return "/";
  return path.startsWith("/") ? path : `/${path}`;
};

const toAbsoluteUrl = (path: string) => `${normalizeBaseUrl()}${normalizePath(path)}`;

export const buildLocalizedSeoMetadata = ({
  locale,
  path,
  title,
  description,
  keywords = [],
  type = "website",
  image = DEFAULT_OG_IMAGE,
  noIndex = false,
}: BuildLocalizedSeoMetadataInput): Metadata => {
  const safeLocale: Locale = routing.locales.includes(locale as Locale)
    ? (locale as Locale)
    : routing.defaultLocale;

  const pagePath = normalizePath(path);
  const canonical = toAbsoluteUrl(`/${safeLocale}${pagePath === "/" ? "" : pagePath}`);

  const languageAlternates = Object.fromEntries(
    routing.locales.map((currentLocale) => [
      currentLocale,
      toAbsoluteUrl(`/${currentLocale}${pagePath === "/" ? "" : pagePath}`),
    ])
  );

  const ogImageUrl = toAbsoluteUrl(image);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
      languages: languageAlternates,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type,
      url: canonical,
      title,
      description,
      siteName: SITE_NAME,
      locale: safeLocale,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
};
