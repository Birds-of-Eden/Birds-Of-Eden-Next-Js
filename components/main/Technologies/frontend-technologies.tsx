"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const FrontendTechnologies = () => {
  const t = useTranslations();

  const technologies = [
    {
      id: 1,
      name: "reactJs",
      category: "frontend",
      image: "/assets/react.jpg",
    },
    { id: 2, name: "vueJs", category: "frontend", image: "/assets/vue.png" },
    {
      id: 3,
      name: "angular",
      category: "frontend",
      image: "/assets/angular.jpg",
    },
    {
      id: 4,
      name: "nextJs",
      category: "frontend",
      image: "/assets/next js.png",
    },
    { id: 5, name: "mui", category: "frontend", image: "/assets/mui.png" },
    {
      id: 6,
      name: "chakraUi",
      category: "frontend",
      image: "/assets/chakra_ui.png",
    },
    {
      id: 7,
      name: "streamlit",
      category: "frontend",
      image: "/assets/streamlit.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {technologies.map((technology) => (
        <div
          key={technology.id}
          className="flex transform flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg transition duration-300 hover:scale-105 dark:bg-slate-800"
        >
          <Image
            src={technology.image}
            alt={t(`technologyList.technologies.frontend.${technology.name}`)}
            className="mb-4 size-24 animate-spin-slow rounded-full border-4 border-gray-300 object-cover"
            width="96"
            height="96"
          />
          <h3 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">
            {technology.name}
          </h3>
          <p className="text-gray-600 dark:text-white">
            {t(`technologyList.technologies.frontend.${technology.name}`)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FrontendTechnologies;
