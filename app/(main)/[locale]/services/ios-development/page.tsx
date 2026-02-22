// app/ios-app-dev/page.tsx (SSR Page)
import React from "react";
import { getTranslations } from "next-intl/server";
import IOSAppDevContent from "@/components/main/Services/IOSAppDevContent";

const IOSAppDev = async () => {
  const t = await getTranslations();
  const iosAppDev = t.raw("services.iosAppDev");

  return (
    <div>
      <IOSAppDevContent
        title={iosAppDev.title}
        header={iosAppDev.header}
        list={iosAppDev.list}
        footer={iosAppDev.footer}
      />
    </div>
  );
};

export default IOSAppDev;
