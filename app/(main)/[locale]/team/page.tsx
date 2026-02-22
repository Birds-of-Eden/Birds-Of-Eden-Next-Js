import React from "react";
import { getTranslations } from "next-intl/server";
import TeamContent from "@/components/main/home/TeamContent";

import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  const title = t("teamPage.metadata.title");
  const description = t("teamPage.metadata.description");

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
    },
  };
}

const TeamPage = async () => {
  const t = await getTranslations();
  const teamData = t.raw("team");

  return (
    <div>
      <TeamContent
        title={teamData.title}
        members={teamData.members}
        viewPortfolio={t("team.viewPortfolio")}
        descriptionTitle={t("team.descriptionTitle")}
      />
    </div>
  );
};

export default TeamPage;
