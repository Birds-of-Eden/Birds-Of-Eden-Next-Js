import React from "react";
import { getTranslations } from "next-intl/server";
import PrivacyContent from "@/components/main/home/PrivacyContent";

const PrivacyPage = async () => {
  const t = await getTranslations();
  const privacyPolicy = t.raw("home.privacyPolicy");

  return (
    <div>
      <PrivacyContent privacyPolicy={privacyPolicy} />
    </div>
  );
};

export default PrivacyPage;
