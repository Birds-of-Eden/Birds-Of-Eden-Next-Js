// components/PaymentGatewayIntegrationContent.tsx (CSR Component)
"use client";

import { FaCcStripe, FaCcPaypal } from "react-icons/fa";
import { SiRazorpay } from "react-icons/si";

interface PaymentGatewayIntegrationContentProps {
  title: string;
  description: string;
  whyChoose: {
    title: string;
    list: { title: string; text: string }[];
  };
  providers: {
    title: string;
    list: { title: string; text: string }[];
  };
  integrationProcess: {
    title: string;
    list: { title: string; text: string }[];
  };
  cta: {
    title: string;
    description: string;
    contact: string;
  };
}

const PaymentGatewayIntegrationContent: React.FC<
  PaymentGatewayIntegrationContentProps
> = ({ title, description, whyChoose, providers, integrationProcess, cta }) => {
  return (
    <div className="">
      <div className="mx-auto mb-16 mt-8 max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl">
        <div className="transform rounded-lg bg-gray-100 p-8 shadow-lg transition duration-300 hover:scale-105 dark:bg-slate-800">
          {/* Title Section */}
          <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-purple-500 lg:text-4xl">
            {title}
          </h2>
          <p className="mb-6 text-lg text-gray-700 dark:text-white">
            {description}
          </p>

          {/* Features Section */}
          <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">
            🔹 {whyChoose.title}
          </h3>
          <ul className="mb-6 list-inside list-disc text-lg text-gray-700 dark:text-white">
            {whyChoose.list.map((list, index) => (
              <li key={index}>
                <span className="font-bold">{list.title}</span> {list.text}
              </li>
            ))}
          </ul>

          {/* Payment Providers Section */}
          <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">
            🔹 {providers.title}
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {providers.list.map((provider, index) => {
              const icons = [
                <FaCcStripe key="stripe" className="size-10 mx-auto mb-2" />,
                <FaCcPaypal key="paypal" className="size-10 mx-auto mb-2" />,
                <SiRazorpay key="razorpay" className="size-10 mx-auto mb-2" />,
              ];

              return (
                <div
                  key={index}
                  className="rounded-lg bg-white p-4 shadow-md transition hover:shadow-lg dark:bg-gray-900"
                >
                  {icons[index]}
                  <h4 className="text-center text-lg font-bold text-gray-800 dark:text-white">
                    {provider.title}
                  </h4>
                  <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                    {provider.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Integration Process Section */}
          <h3 className="mb-3 mt-8 text-xl font-semibold text-gray-800 dark:text-white">
            🔹 {integrationProcess.title}
          </h3>
          <ul className="mb-6 list-inside list-disc text-lg text-gray-700 dark:text-white">
            {integrationProcess.list.map((integration, index) => (
              <li key={index}>
                <span className="font-bold">{integration.title}</span>{" "}
                {integration.text}
              </li>
            ))}
          </ul>

          {/* Call to Action */}
          <div className="mt-8 text-center">
            <h3 className="mb-3 text-xl font-bold text-gray-800 dark:text-white">
              {cta.title}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {cta.description}
            </p>
            <button className="mt-4 rounded-lg bg-purple-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-purple-700">
              {cta.contact}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentGatewayIntegrationContent;
