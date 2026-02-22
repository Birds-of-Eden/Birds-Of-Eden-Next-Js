"use client";

import React, { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("system");
  const t = useTranslations();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <footer className="bg-slate-50 text-white dark:bg-[#334155]">
      <div className="container flex flex-col items-center justify-between gap-8 py-12 md:flex-row">
        <div className="md:w-1/3">
          <div className="mb-4 flex items-center justify-center md:mb-0">
            <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-white p-2 shadow-md transition duration-300 hover:shadow-lg md:h-24 md:w-24">
              <img
                src="/assets/boedl1.png"
                alt="logo"
                className="h-full w-full transform object-cover duration-500 hover:scale-105"
              />
            </div>
          </div>
          <h1 className="text-center font-serif text-2xl font-bold tracking-wider sm:text-4xl">
            <a
              href="/#home"
              className="flex items-center justify-center transition duration-300 ease-in-out hover:text-primary"
            >
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                BIRDS
              </span>
              <span className="ml-2 inline-block text-primary drop-shadow-lg">
                OF EDEN
              </span>
            </a>
          </h1>

          <p className="mt-2 text-center text-black dark:text-white">
            {t("footer.companyDescription")}
          </p>
        </div>

        <div className="mt-8 text-black dark:text-white md:mt-0 md:w-2/3">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            <div className="col-span-2">
              <div className="flex gap-40">
                <div>
                  <h2 className="mb-4 text-xl font-semibold">
                    {t("footer.importantLinks")}
                  </h2>
                  <ul className="flex flex-col gap-2">
                    <li className="cursor-pointer transition duration-300 hover:text-primary">
                      <Link
                        href="/"
                        className={
                          pathname === "/"
                            ? "flex items-center gap-2 text-blue-500"
                            : "flex items-center gap-2"
                        }
                      >
                        {t("navbar.home")}
                      </Link>
                    </li>
                    <li className="cursor-pointer transition duration-300 hover:text-primary">
                      <Link
                        href="/about"
                        className={
                          pathname === "/about"
                            ? "flex items-center gap-2 text-blue-500"
                            : "flex items-center gap-2"
                        }
                      >
                        {t("navbar.about")}
                      </Link>
                    </li>

                    <li className="cursor-pointer transition duration-300 hover:text-primary">
                      <Link
                        href="/contact"
                        className={
                          pathname === "/contact"
                            ? "flex items-center gap-2 text-blue-500"
                            : "flex items-center gap-2"
                        }
                      >
                        {t("navbar.contact")}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-4 text-xl font-semibold">
                    {t("footer.links")}
                  </h2>
                  <ul className="flex flex-col gap-2">
                    <li className="cursor-pointer transition duration-300 hover:text-primary">
                      <Link
                        href="/privacy"
                        className={
                          pathname === "/privacy"
                            ? "flex items-center gap-2 text-blue-500"
                            : "flex items-center gap-2"
                        }
                      >
                        {t("navbar.privacy")}
                      </Link>
                    </li>
                    <li className="cursor-pointer transition duration-300 hover:text-primary">
                      <Link
                        href="/services"
                        className={
                          pathname === "/services"
                            ? "flex items-center gap-2 text-blue-500"
                            : "flex items-center gap-2"
                        }
                      >
                        {t("navbar.services")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-8">
                <div className="flex items-center justify-center transition-transform duration-300 hover:scale-110">
                  <div className="flex h-12 w-24 items-center justify-center rounded-lg bg-white p-2">
                    <img
                      src="/assets/basis.webp"
                      alt="BASIS"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center transition-transform duration-300 hover:scale-110">
                  <div className="flex h-12 w-24 items-center justify-center rounded-lg bg-white p-2">
                    <img
                      src="/assets/microsoft.png"
                      alt="Microsoft"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center transition-transform duration-300 hover:scale-110">
                  <div className="flex h-12 w-24 items-center justify-center rounded-lg bg-white p-2">
                    <img
                      src="/assets/cisco new.png"
                      alt="Cisco"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center transition-transform duration-300 hover:scale-110">
                  <div className="flex h-12 w-24 items-center justify-center rounded-lg bg-white p-2">
                    <img
                      src="/assets/Bangladesh_National_Portal_logo.png"
                      alt="Bangladesh National Portal"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold">
                {t("footer.socialLinks")}
              </h2>
              <div className="flex flex-col gap-2">
                <h3>{t("footer.newsletter")}</h3>
                <input
                  className="rounded-full bg-slate-200 px-3 py-1 text-black focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-slate-100"
                  type="text"
                  placeholder={t("footer.emailPlaceholder")}
                />
                <div className="flex gap-2">
                  <Link href="/">
                    <FaInstagram className="text-3xl" />
                  </Link>
                  <Link href="/">
                    <FaFacebook className="text-3xl" />
                  </Link>
                  <Link href="/">
                    <FaLinkedin className="text-3xl" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 pb-4 pt-8 text-center text-black dark:text-white">
        <p>{t("footer.copyright")} {new Date().getFullYear()} Birds Of Eden</p>
        <button
          onClick={toggleTheme}
          className="mt-4 rounded-md border border-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black dark:border-white dark:focus:ring-white "
        >
          {mounted && theme === "dark" ? (
            <BiSun className="text-xl text-black dark:text-white" />
          ) : (
            <BiMoon className="text-xl text-black dark:text-white" />
          )}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
