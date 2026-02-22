import { MetadataRoute } from "next";
import { routing, Locale } from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

const host = process.env.NEXT_PUBLIC_BASE_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const t = await getTranslations();
  const projects = t.raw("home.erpProjects.projects") as { id: string }[];
  const drones = t.raw("home.dronePage.drones") as { id: string }[];
  const blogs = t.raw("home.blogPage.blogs") as { id: string }[];

  const staticLinks = [
    "/",
    "/about-us",
    "/team",
    "/our-service",
    "/contact",
    "/blogs",
    "/privacy",
    "/services/regular-services",
    "/services/web-development",
    "/services/ios-development",
    "/services/mobile-development",
    "/services/payment-gateway",
    "/services/quickbook",
    "/services/zoho-integration",
    "/technologies",
    "/technologies?tab=backend",
    "/products?tab=govt",
    "/products?tab=seo",
    "/products?tab=financial",
    "/products?tab=corporate",
    "/products?tab=ecommerce",
    "/hardware",
    "/drones",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const link of staticLinks) {
    sitemapEntries.push(...getEntries(link));
  }

  // Dynamic project entries
  projects.forEach((project) => {
    sitemapEntries.push(...getEntries(`/projects/${project.id}`));
  });

  // Dynamic drone entries
  drones.forEach((drone) => {
    sitemapEntries.push(...getEntries(`/drones/${drone.id}`));
  });

  // Dynamic blog entries
  blogs.forEach((blog) => {
    sitemapEntries.push(...getEntries(`/blogs/${blog.id}`));
  });

  return sitemapEntries;
}

type Href = Parameters<typeof getPathname>[0]["href"];

function getEntries(href: Href) {
  return routing.locales.map((locale) => ({
    url: getUrl(href, locale),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((cur) => [cur, getUrl(href, cur)])
      ),
    },
  }));
}

function getUrl(href: Href, locale: Locale) {
  const pathname = getPathname({ locale, href });
  return host + pathname;
}
