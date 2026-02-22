// app/mobile-app/page.tsx (SSR Page)
import React from "react";
import { getTranslations } from "next-intl/server";
import MobileAppContent from "@/components/main/Services/MobileAppContent";

const MobileApp = async () => {
  const t = await getTranslations();
  const mobileApp = t.raw("services.mobileApp");

  return (
    <div>
      <MobileAppContent
        title={mobileApp.title}
        header={mobileApp.header}
        list={mobileApp.list}
        footer={mobileApp.footer}
      />
    </div>
  );
};

export default MobileApp;
