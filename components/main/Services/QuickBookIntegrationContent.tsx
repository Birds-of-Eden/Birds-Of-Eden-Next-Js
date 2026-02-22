// components/QuickBookIntegrationContent.tsx (CSR Component)
"use client";

interface QuickBookIntegrationContentProps {
  title: string;
  description: string;
  list: { title: string; text: string }[];
  footer: string;
}

const QuickBookIntegrationContent: React.FC<
  QuickBookIntegrationContentProps
> = ({ title, description, list, footer }) => {
  return (
    <section className="bg-gray-50 py-12 dark:bg-slate-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="mx-auto max-w-4xl transform rounded-lg bg-white p-8 shadow-lg transition-transform hover:scale-105 dark:bg-slate-800">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-purple-500 md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            {description}
          </p>

          <ul className="mt-6 space-y-4">
            {list.map((list, index) => (
              <li key={index} className="flex items-start">
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>{list.title}</strong> {list.text}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
            {footer}
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuickBookIntegrationContent;
