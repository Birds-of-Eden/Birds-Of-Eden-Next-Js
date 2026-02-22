import React from "react";
import { getTranslations } from "next-intl/server";
import AccessoriesContent from "@/components/main/Accessories/AccessoriesContent";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  const title = t("hardwareProducts.metadata.title"); // Use a specific metadata title key
  const description = t("hardwareProducts.metadata.description"); // Use a specific metadata description key

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
    },
  };
}

const Accessories = async () => {
  const t = await getTranslations();
  const hardwareProducts = t.raw("hardwareProducts");

  return (
    <div>
      <AccessoriesContent hardwareProducts={hardwareProducts} />
    </div>
  );
};

export default Accessories;
