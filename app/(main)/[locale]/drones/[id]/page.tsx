import BackButton from "@/components/ui/back-button";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const t = await getTranslations("home");
  const droneData = t.raw("dronePage.drones");

  const drone = droneData.find((d) => d.id == id);

  return {
    title: drone.title,
    description: drone.description,
    openGraph: {
      title: drone.title,
      description: drone.description,
      type: "article",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/drones/${id}`,
      images: [
        {
          url: drone.image,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

async function DroneDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const t = await getTranslations("home");
  const droneData = t.raw("dronePage.drones");

  const drone = droneData.find((d) => d.id == id);

  return (
    <div className="mx-auto mt-24 max-w-4xl pb-24">
      <div className="h-[500px] relative">
        <Image
          src={drone.image}
          alt={drone.title}
          className="rounded-lg object-cover shadow-md"
          fill
        />
      </div>
      <h2 className="mt-4 text-3xl font-bold text-gray-800 dark:text-white">
        {drone.title}
      </h2>
      <p className="mt-2 text-gray-700 dark:text-white">{drone.description}</p>

      <BackButton>{t("erpProjects.button")}</BackButton>
    </div>
  );
}

export default DroneDetailsPage;
