import React from "react";
import { getTranslations } from "next-intl/server";
import ProductTabs from "@/components/main/products/ProductTabs";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  const title = t("productsPage.metadata.title");
  const description = t("productsPage.metadata.description");

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
    },
  };
}

const ProductPage = async () => {
  const t = await getTranslations();

  return (
    <div>
      <ProductTabs
        ourProducts={t("products.ourProducts")}
        govt={t("products.govt")}
        seo={t("products.seo")}
        financial={t("products.financial")}
        corporate={t("products.corporate")}
        ecommerce={t("products.ecommerce")}
      />
    </div>
  );
};

export default ProductPage;
