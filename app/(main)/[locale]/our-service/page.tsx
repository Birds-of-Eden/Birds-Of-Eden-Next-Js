import React from "react";
import { getTranslations } from "next-intl/server";
import OurServiceContent from "@/components/main/Services/OurServiceContent";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  const title = t("servicesPage.metadata.title"); // Use a specific metadata title key
  const description = t("servicesPage.metadata.description"); // Use a specific metadata description key

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
    },
  };
}

const OurServicePage = async () => {
  const t = await getTranslations();
  const cards = t.raw("services.bigData");
  const showLess = t("services.showLess");
  const learnMore = t("services.learnMore");

  return (
    <div>
      <OurServiceContent
        cards={cards}
        showLess={showLess}
        learnMore={learnMore}
      />
    </div>
  );
};

export default OurServicePage;
