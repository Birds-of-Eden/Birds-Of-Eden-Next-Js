// app/payment-gateway-integration/page.tsx (SSR Page)
import React from "react";
import { getTranslations } from "next-intl/server";
import PaymentGatewayIntegrationContent from "@/components/main/Services/PaymentGatewayIntegrationContent";

const PaymentGatewayIntegration = async () => {
  const t = await getTranslations();
  const paymentGateway = t.raw("services.paymentGateway");

  return (
    <div>
      <PaymentGatewayIntegrationContent
        title={paymentGateway.title}
        description={paymentGateway.description}
        whyChoose={paymentGateway.whyChoose}
        providers={paymentGateway.providers}
        integrationProcess={paymentGateway.integrationProcess}
        cta={paymentGateway.cta}
      />
    </div>
  );
};

export default PaymentGatewayIntegration;
