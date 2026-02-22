// app/web-dev/page.tsx (SSR Page)
import React from "react";
import { getTranslations } from "next-intl/server";
import WebDevContent from "@/components/main/Services/WebDevContent";

const WebDev = async () => {
  const t = await getTranslations();
  const webDev = t.raw("services.webDev");

  return (
    <div>
      <WebDevContent
        title={webDev.title}
        header={webDev.header}
        list={webDev.list}
        footer={webDev.footer}
      />
    </div>
  );
};

export default WebDev;
