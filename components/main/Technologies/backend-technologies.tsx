"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const BackendTechnologies = () => {
  const t = useTranslations();

  const technologies = [
    { id: 1, name: "nodeJs", category: "backend", image: "/assets/nodejs.png" },
    { id: 2, name: "django", category: "backend", image: "/assets/django.png" },
    {
      id: 3,
      name: "springBoot",
      category: "backend",
      image: "/assets/springboot.png",
    },
    { id: 4, name: "python", category: "backend", image: "/assets/python.png" },
    { id: 5, name: "go", category: "backend", image: "/assets/go.png" },
    { id: 6, name: "rust", category: "backend", image: "/assets/rust.png" },
    {
      id: 7,
      name: "laravel",
      category: "backend",
      image: "/assets/laravel.png",
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
            alt={t(`technologyList.technologies.backend.${technology.name}`)}
            className="mb-4 size-24 animate-spin-slow rounded-full border-4 border-gray-300 object-cover"
            width="96"
            height="96"
          />
          <h3 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">
            {technology.name}
          </h3>
          <p className="text-gray-600 dark:text-white">
            {t(`technologyList.technologies.backend.${technology.name}`)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BackendTechnologies;
