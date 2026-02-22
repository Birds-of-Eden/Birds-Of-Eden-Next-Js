"use client";

import { useTranslations } from "next-intl";

const Govt = () => {
  const t = useTranslations();
  return (
    <div className="min-h-[200px] rounded-lg bg-gray-100 p-4 shadow-md dark:bg-slate-800 sm:p-6">
      <h2 className="mb-4 text-xl font-bold text-gray-800 dark:text-white sm:text-2xl">
        {t("products.govtSolutions")}
      </h2>
      <p className="mb-2 text-gray-700 dark:text-white">
        {t("products.govtDescription")}
      </p>
      <ul className="mb-4 list-inside list-disc text-gray-700 dark:text-white">
        <li>{t("products.publicAdmin")}</li>
        <li>{t("products.eGovernance")}</li>
        <li>{t("products.dataSecurity")}</li>
        <li>{t("products.citizenEngagement")}</li>
      </ul>
      <p className="text-gray-700 dark:text-white">
        {t("products.govtDesigned")}
      </p>
    </div>
  );
};

export default Govt;
