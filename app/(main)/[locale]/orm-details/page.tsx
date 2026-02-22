import React from "react";
import { getTranslations } from "next-intl/server";
import ORMDetailsContent from "@/components/main/home/ORMDetailsContent";

import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  const title = t("home.ormDetails.metadata.title");
  const description = t("home.ormDetails.metadata.description");

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
    },
  };
}

const ORMDetailsPage = async () => {
  const t = await getTranslations();

  const title = t("home.ormDetails.title");
  const description = t("home.ormDetails.description");
  const keyAspectsTitle = t("home.ormDetails.keyAspectsTitle");
  const monitoring = t("home.ormDetails.monitoring");
  const responding = t("home.ormDetails.responding");
  const contentCreation = t("home.ormDetails.contentCreation");
  const socialMedia = t("home.ormDetails.socialMedia");
  const crisisManagement = t("home.ormDetails.crisisManagement");
  const benefitsTitle = t("home.ormDetails.benefitsTitle");
  const enhancedTrust = t("home.ormDetails.enhancedTrust");
  const improvedBrandImage = t("home.ormDetails.improvedBrandImage");
  const increasedSales = t("home.ormDetails.increasedSales");
  const proactiveReputation = t("home.ormDetails.proactiveReputation");
  const competitiveAdvantage = t("home.ormDetails.competitiveAdvantage");
  const conclusion = t("home.ormDetails.conclusion");

  return (
    <div>
      <ORMDetailsContent
        title={title}
        description={description}
        keyAspectsTitle={keyAspectsTitle}
        monitoring={monitoring}
        responding={responding}
        contentCreation={contentCreation}
        socialMedia={socialMedia}
        crisisManagement={crisisManagement}
        benefitsTitle={benefitsTitle}
        enhancedTrust={enhancedTrust}
        improvedBrandImage={improvedBrandImage}
        increasedSales={increasedSales}
        proactiveReputation={proactiveReputation}
        competitiveAdvantage={competitiveAdvantage}
        conclusion={conclusion}
      />
    </div>
  );
};

export default ORMDetailsPage;
