"use client";

import { useTranslations } from "next-intl";

const Financial = () => {
  const t = useTranslations();
  return (
    <div className="min-h-[200px] rounded-lg bg-gray-100 p-4 shadow-md dark:bg-slate-800 sm:p-6">
      <h2 className="mb-4 text-xl font-bold text-gray-800 dark:text-white sm:text-2xl">
        {t("products.financialSolutions")}
      </h2>
      <p className="mb-2 text-gray-700 dark:text-white">
        {t("products.financialDescription")}
      </p>
      <ul className="mb-4 list-inside list-disc text-gray-700 dark:text-white">
        <li>{t("products.onlineBanking")}</li>
        <li>{t("products.fraudDetection")}</li>
        <li>{t("products.investmentManagement")}</li>
        <li>{t("products.riskManagement")}</li>
      </ul>
      <p className="text-gray-700 dark:text-white">
        {t("products.financialEnsure")}
      </p>
    </div>
  );
};

export default Financial;
