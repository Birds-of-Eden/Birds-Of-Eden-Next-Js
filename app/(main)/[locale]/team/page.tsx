import React from "react";
import { getTranslations } from "next-intl/server";
import TeamContent from "@/components/main/home/TeamContent";

import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const title = t("teamPage.metadata.title", {
    defaultValue: "Meet Our Executive Team",
  });
  const description = t("teamPage.metadata.description", {
    defaultValue:
      "Discover the leaders driving Birds of Eden—our executive team and their expertise.",
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

const TeamPage = async () => {
  const t = await getTranslations();
  const teamData = t.raw("team");

  return (
    <div>
      <TeamContent />
    </div>
  );
};

export default TeamPage;
