import React from "react";
import { getTranslations } from "next-intl/server";

import AboutUsContent from "@/components/main/home/AboutUsContent";

import type { Metadata } from "next";
import { buildLocalizedSeoMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return buildLocalizedSeoMetadata({
    locale,
    path: "/about-us",
    title: "About Birds Of Eden | ERP & AI Software Experts",
    description:
      "Learn about Birds Of Eden, our mission, leadership team, and how we deliver scalable ERP, AI, and digital transformation solutions.",
    keywords: [
      "about birds of eden",
      "software company",
      "ERP experts",
      "AI development team",
    ],
  });
}

const AboutUs = async () => {
  const t = await getTranslations();
  const aboutUs = t.raw("aboutUs");

  return (
    <div>
      <AboutUsContent aboutUs={aboutUs} />
    </div>
  );
};

export default AboutUs;
