import React from "react";
import { getTranslations } from "next-intl/server";
import TechnologyTabs from "@/components/main/Technologies/TechnologyTabs";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  const title = t("technologyList.metadata.title");
  const description = t("technologyList.metadata.description", {
    companyName: "BIRDS OF EDEN",
  });

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
    },
  };
}

const TechnologyList = async () => {
  const t = await getTranslations();

  return (
    <div>
      <TechnologyTabs
        ourTechnology={t("technologyList.ourTechnology")}
        description={t("technologyList.description", {
          companyName: "BIRDS OF EDEN",
        })}
        frontendTechnologies={t("technologyList.frontendTechnologies")}
        backendTechnologies={t("technologyList.backendTechnologies")}
      />
    </div>
  );
};

export default TechnologyList;
