"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "@/i18n/navigation";

const Drones = () => {
  const t = useTranslations();
  const router = useRouter();

  return (
    <Splide className="drone-carousel">
      {t.raw("home.dronePage.drones").map((drone, index) => (
        <SplideSlide key={index}>
          <div className="flex flex-col items-center gap-8 p-8 md:flex-row">
            <div className="transition-opacity duration-500 h-[400px]  relative md:w-1/2">
              <Image
                src={drone.image}
                alt={drone.title}
                className="w-full rounded-lg object-cover shadow-xl"
                fill
              />
            </div>
            <div className="space-y-6 md:w-1/2">
              <h2 className="text-3xl font-bold text-blue-400">
                {drone.title}
              </h2>
              <p className="text-lg leading-relaxed text-black dark:text-gray-300">
                {drone.description}
              </p>

              <ul className="list-disc pl-4 text-black dark:text-white">
                <li>
                  <strong>{t("home.dronePage.specs.flightTime")}: </strong>
                  {drone.specs.flightTime}
                </li>
                <li>
                  <strong>{t("home.dronePage.specs.range")}: </strong>
                  {drone.specs.range}
                </li>
                <li>
                  <strong>{t("home.dronePage.specs.camera")}: </strong>
                  {drone.specs.camera}
                </li>
              </ul>

              <div className="flex gap-4">
                <button
                  onClick={() => router.push(`/drones`)}
                  className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
                >
                  {t("home.dronePage.viewCollections")}
                </button>
                <button
                  onClick={() => router.push(`/drones/${index + 1}`)}
                  className="rounded-lg border border-blue-400 px-6 py-2 text-blue-400 transition-colors hover:bg-blue-400 hover:text-white"
                >
                  {t("home.dronePage.viewSpecs")}
                </button>
              </div>
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Drones;
