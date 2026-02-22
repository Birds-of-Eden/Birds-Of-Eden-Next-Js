import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import TypeWriterTexts from "@/components/main/home/typewriter";
import CircleServices from "@/components/main/home/circle-service";
import Stats from "@/components/main/home/stats";
import ERPProject from "@/components/main/home/erp-project";
import { CheckCircle, MessageSquare, TrendingUp } from "lucide-react";
import Image from "next/image";
import Drones from "@/components/main/home/drones";
import ProjectGallery from "@/components/main/home/projects-gallery";
import CircularGallery from "@/components/main/home/circular-gallery";
import TeamMoment from "@/components/main/home/team-moment";
import ClientTestimonial from "@/components/main/home/clients-temonials";
import type { Metadata } from "next";
import { buildLocalizedSeoMetadata } from "@/lib/seo";

interface Feature {
  title: string;
  description: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return buildLocalizedSeoMetadata({
    locale,
    path: "/",
    title: "Birds Of Eden | ERP, AI, Web, Mobile and Hardware Solutions",
    description:
      "Birds Of Eden builds ERP platforms, AI solutions, web and mobile apps, and enterprise hardware integrations for modern businesses.",
    keywords: [
      "ERP software company",
      "AI solutions",
      "web development",
      "mobile app development",
      "enterprise software",
    ],
  });
}

const HomePage = async () => {
  const t = await getTranslations();

  return (
    <main>
      {/* Hero Section */}
      <section className="flex flex-col pt-[100px] lg:pt-0">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-4 text-white md:gap-8 lg:h-[calc(100vh-112px)] lg:grid-cols-2">
            <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col items-start gap-4"
            >
              <h1 className="transform font-bold text-primary text-4xl leading-7 transition-transform duration-500 xl:text-5xl">
                {t("home.hero.title")}
              </h1>
              <TypeWriterTexts strings={t.raw("home.hero.typewriter")} />
              <p className="font-light tracking-wide text-black duration-500 dark:text-white/90 xl:text-xl">
                {t("home.hero.description")}
              </p>
              <div className="mt-4 flex w-full justify-start gap-4">
                <Link
                  href="#erp-project"
                  className="mb-2 rounded-md border-2 border-blue-500 bg-blue-500/50 px-4 py-2 text-lg text-black shadow-md transition-transform duration-300 hover:scale-105 hover:border-blue-700 hover:bg-blue-700 dark:text-white xl:px-8 xl:py-3 xl:text-2xl"
                >
                  {t("home.hero.getStarted")}
                </Link>
                <Link
                  href="/our-service"
                  className="mb-2 rounded-md border-2 border-emerald-500 bg-emerald-500/50 px-4 py-2 text-lg text-black shadow-md transition-transform duration-300 hover:scale-105 hover:border-emerald-700 hover:bg-emerald-700 dark:text-white xl:px-8 xl:py-3 xl:text-2xl"
                >
                  {t("home.hero.learnMore")}
                </Link>
              </div>
            </div>
            <div className="hidden md:flex">
              <CircleServices />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container my-10">
        <Stats stats={t.raw("home.service.stats")} />
      </section>

      {/* ERP Project */}
      <section id="erp-project">
        <ERPProject />
      </section>

      {/* ORM */}
      <section className="bg-gray-100 py-16 dark:bg-slate-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            {t("home.ormSection.title")}
          </h2>
          <p className="mb-8 text-lg">{t("home.ormSection.description")}</p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {t.raw("home.ormSection.features").map((feature: Feature, index: number) => {
              const icons = [
                <CheckCircle
                  key="check-circle"
                  className="h-10 w-10 text-green-500"
                />,
                <MessageSquare
                  key="message-square"
                  className="h-10 w-10 text-blue-500"
                />,
                <TrendingUp
                  key="trending-up"
                  className="h-10 w-10 text-purple-500"
                />,
              ];
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg dark:bg-slate-800"
                >
                  <div className="mb-4 flex justify-center">{icons[index]}</div>
                  <h3 className="mb-2 text-2xl font-semibold dark:text-teal-500">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-white">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8">
            <Link href="/orm-details" className="boxshadow link">
              {t("home.ormSection.learnMore")}
            </Link>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="bg-slate-100 dark:bg-slate-800 dark:text-white">
        <div className="container flex flex-col items-center justify-center py-10 md:h-[500px]">
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
            <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-once="true"
              className="order-1 md:order-2 w-full"
            >
              <Image
                src="https://images.pexels.com/photos/3184638/pexels-photo-3184638.jpeg"
                alt={t("home.bannerDetails.title")}
                className="mx-auto object-cover rounded-md ring-2 transition-all duration-500 hover:drop-shadow-[0_0_20px_rgba(255,215,0,0.8)]"
                width="450"
                height="450"
              />
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex order-2 md:order-1 flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left"
            >
              <h1 className="text-2xl md:text-4xl">
                {t("home.bannerDetails.title")}
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {t("home.bannerDetails.description")}
              </p>
              <div>
                <ul className="flex list-inside list-disc flex-col gap-2 md:gap-4">
                  {t
                    .raw("home.bannerDetails.features")
                    .map((feature: string, index: number) => (
                      <li key={index} className="font-medium">
                        {feature}
                      </li>
                    ))}
                </ul>
              </div>
              <div className="space-x-4">
                <Link href="/get-started">
                  <button className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700">
                    {t("home.bannerDetails.getStarted")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drones */}
      <section className="bg-slate-100 text-white dark:bg-slate-900">
        <div className="container mx-auto px-4 py-12">
          <h3 className="heading3 pb-10">{t("home.dronePage.title")}</h3>
          <Drones />
        </div>
      </section>

      {/* Projects Gallery */}
      <ProjectGallery />

      {/* Our Partners */}
      <section
        style={{ height: "700px", position: "relative" }}
        className="pb-40 pt-20"
      >
        <h3 className="heading3 pt-3">{t("home.partners.title")}</h3>
        <CircularGallery items={[]} bend={3} textColor="#ffffff" borderRadius={0.05} />
      </section>

      {/* Team Moment */}
      <TeamMoment />

      {/* Client Testimonials */}
      <section className="mb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="heading my-8 text-center text-3xl font-bold">
            {t("home.clientPage.title")}
          </h3>

          <ClientTestimonial />
        </div>
      </section>

      {/* Blogs */}
      <section className="bg-slate-100 dark:bg-slate-900">
        <div data-aos="fade-up" data-aos-offset="200">
          <article className="container mb-10 py-8">
            <h3 className="heading mb-8 text-center text-3xl font-bold">
              {t("home.blogPage.title")}
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {t.raw("home.blogPage.blogs").map((blog: any) => (
                <div
                  key={blog.id}
                  className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl dark:bg-slate-950"
                >
                  {/* Image with Overlay */}
                  <div className="relative h-[250px]">
                    <Image
                      src={`/assets/${blog.image}`}
                      alt={blog.title}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      fill
                    />
                    <div className="absolute inset-0 bg-black opacity-40 transition-opacity duration-300 group-hover:opacity-20"></div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex justify-between text-sm text-gray-500">
                      <p>{blog.date}</p>
                      <p>
                        {t("home.blogPage.by")} {blog.author}
                      </p>
                    </div>
                    <h2 className="mt-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-500 dark:text-white">
                      {blog.title}
                    </h2>
                    <p className="mt-2 line-clamp-2 text-gray-600 dark:text-gray-400">
                      {blog.description}
                    </p>

                    {/* Read More Button */}
                    <Link
                      href={`/blogs/${blog.id}`}
                      className="mt-4 inline-block text-sm font-semibold text-blue-600 group-hover:underline dark:text-blue-400"
                    >
                      {t("home.blogPage.readMore")} →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
