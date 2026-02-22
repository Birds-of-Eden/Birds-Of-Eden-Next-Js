"use client";

import {
  CheckCircle,
  ShieldCheck,
  TrendingUp,
  Users,
  MessageSquare,
  AlertTriangle,
} from "lucide-react";

interface ORMDetailsContentProps {
  title: string;
  description: string;
  keyAspectsTitle: string;
  monitoring: string;
  responding: string;
  contentCreation: string;
  socialMedia: string;
  crisisManagement: string;
  benefitsTitle: string;
  enhancedTrust: string;
  improvedBrandImage: string;
  increasedSales: string;
  proactiveReputation: string;
  competitiveAdvantage: string;
  conclusion: string;
}

const ORMDetailsContent: React.FC<ORMDetailsContentProps> = ({
  title,
  description,
  keyAspectsTitle,
  monitoring,
  responding,
  contentCreation,
  socialMedia,
  crisisManagement,
  benefitsTitle,
  enhancedTrust,
  improvedBrandImage,
  increasedSales,
  proactiveReputation,
  competitiveAdvantage,
  conclusion,
}) => {
  const featureIcons = {
    monitoring: <ShieldCheck className="mr-2 h-6 w-6 text-blue-500" />,
    responding: <MessageSquare className="mr-2 h-6 w-6 text-green-500" />,
    contentCreation: <CheckCircle className="mr-2 h-6 w-6 text-purple-500" />,
    socialMedia: <Users className="mr-2 h-6 w-6 text-yellow-500" />,
    crisisManagement: <AlertTriangle className="mr-2 h-6 w-6 text-red-500" />,
    enhancedTrust: <ShieldCheck className="mr-2 h-6 w-6 text-blue-500" />,
    improvedBrandImage: <TrendingUp className="mr-2 h-6 w-6 text-green-500" />,
    increasedSales: <TrendingUp className="mr-2 h-6 w-6 text-purple-500" />,
    proactiveReputation: (
      <ShieldCheck className="mr-2 h-6 w-6 text-yellow-500" />
    ),
    competitiveAdvantage: <TrendingUp className="mr-2 h-6 w-6 text-red-500" />,
  };

  return (
    <section className="py-16 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <h2 className="mb-8 text-center text-4xl font-extrabold text-gray-800 dark:text-white">
          {title}
        </h2>
        <p className="mb-10 text-center text-lg text-gray-600 dark:text-gray-300">
          {description}
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-teal-400">
              {keyAspectsTitle}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                {featureIcons.monitoring}
                {monitoring}
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                {featureIcons.responding}
                {responding}
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                {featureIcons.contentCreation}
                {contentCreation}
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                {featureIcons.socialMedia}
                {socialMedia}
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                {featureIcons.crisisManagement}
                {crisisManagement}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-teal-400">
              {benefitsTitle}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                {featureIcons.enhancedTrust}
                {enhancedTrust}
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                {featureIcons.improvedBrandImage}
                {improvedBrandImage}
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                {featureIcons.increasedSales}
                {increasedSales}
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                {featureIcons.proactiveReputation}
                {proactiveReputation}
              </li>
              <li className="flex items-center text-gray-700 dark:text-gray-300">
                {featureIcons.competitiveAdvantage}
                {competitiveAdvantage}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {conclusion}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ORMDetailsContent;
