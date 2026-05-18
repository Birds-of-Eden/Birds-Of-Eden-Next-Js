"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: any[]) => void;
  }
}

export default function RouteChangeTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Ensure we fire once per navigation (pathname or query changes).
    const qs = searchParams?.toString();
    const page_path = qs ? `${pathname}?${qs}` : pathname;

    if (typeof window === "undefined") return;

    const page_location = window.location.href;
    const page_title = document.title;

    // GTM-friendly: push a page_view event to the dataLayer.
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_path,
      page_location,
      page_title,
    });

    // gtag.js-friendly: if gtag is present, also send the GA4 event.
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path,
        page_location,
        page_title,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

