// app/quick-book-integration/page.tsx (SSR Page)
import React from "react";
import { getTranslations } from "next-intl/server";
import QuickBookIntegrationContent from "@/components/main/Services/QuickBookIntegrationContent";

const QuickBookIntegration = async () => {
  const t = await getTranslations();
  const quickBook = t.raw("services.quickBook");

  return (
    <div>
      <QuickBookIntegrationContent
        title={quickBook.title}
        description={quickBook.description}
        list={quickBook.list}
        footer={quickBook.footer}
      />
    </div>
  );
};

export default QuickBookIntegration;
