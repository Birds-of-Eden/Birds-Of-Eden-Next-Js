// app/regular-services/page.tsx (SSR Page)
import React from "react";
import { getTranslations } from "next-intl/server";
import RegularServicesContent from "@/components/main/Services/RegularServicesContent";

const RegularServicesPage = async () => {
  const t = await getTranslations();
  const ourServices = t.raw("services.ourServices");

  return (
    <div>
      <RegularServicesContent
        title={ourServices.title}
        services={ourServices.services}
      />
    </div>
  );
};

export default RegularServicesPage;
