import React from "react";
import { getTranslations } from "next-intl/server";
import DronesCarousel from "@/components/main/Drones/DronesCarousel";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  const title = t("home.dronePage.metadata.title");
  const description = t("home.dronePage.metadata.description");

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
    },
  };
}
const Drones = async () => {
  const t = await getTranslations();
  const drones = t.raw("home.dronePage.drones");
  const droneCollection = t("home.dronePage.droneCollection");
  const droneTagline = t("home.dronePage.droneTagline");

  return (
    <div>
      <DronesCarousel
        drones={drones}
        droneCollection={droneCollection}
        droneTagline={droneTagline}
      />
    </div>
  );
};

export default Drones;
