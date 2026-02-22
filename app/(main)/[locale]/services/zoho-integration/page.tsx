import React from "react";
import { getTranslations } from "next-intl/server";
import ZohoIntegrationContent from "@/components/main/Services/ZohoIntegrationContent";

const ZohoIntegration = async () => {
  const t = await getTranslations();
  const zohoIntegration = t.raw("services.zohoIntegration");

  return (
    <div>
      <ZohoIntegrationContent
        title={zohoIntegration.title}
        description={zohoIntegration.description}
        list={zohoIntegration.list}
        footer={zohoIntegration.footer}
      />
    </div>
  );
};

export default ZohoIntegration;
