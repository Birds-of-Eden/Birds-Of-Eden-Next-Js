import React from "react";
import { getTranslations } from "next-intl/server";

import AboutUsContent from "@/components/main/home/AboutUsContent";

import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  const title = t("aboutUs.metadata.title");
  const description = t("aboutUs.metadata.description");

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
    },
  };
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
