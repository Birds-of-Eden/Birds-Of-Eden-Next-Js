"use client";

import {
  Home,
  Info,
  Users,
  Wrench,
  Phone,
  BookOpen,
  Shield,
  Database,
  Globe,
  Smartphone,
  CreditCard,
  BookCheck,
  Boxes,
  Building2,
  BarChart,
  Building,
  ShoppingCart,
  Cpu,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useEffect, useRef, useState, RefObject } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { useOnClickOutside } from "usehooks-ts";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import LanguageSelector from "@/components/ui/language-selector";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import ResponsiveMenu from "./responsive-menu";
import Image from "next/image";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const t = useTranslations();
  const url = usePathname();
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  const [showMenu, setShowMenu] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClickOutside = () => {
    setShowMenu(false);
  };

  useOnClickOutside(mobileRef as RefObject<HTMLElement>, handleClickOutside);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full">
        {/* Top Bar */}
        <div className="bg-slate-200 text-sm  dark:bg-zinc-800">
          <div className="container flex flex-wrap items-center justify-center gap-3 py-2 md:justify-end">
            {/* Phone */}
            <div className="flex items-center gap-2 text-black dark:text-white">
              <FaEnvelope className="size-5" />
              <a
                href="mailto:talat@birdsofeden.com"
                className="hover:underline "
              >
                atservice@birdsofeden.me
              </a>
            </div>
            <div className="flex cursor-pointer items-center gap-2 text-black dark:text-white">
              <FaPhoneAlt className="size-5" />
              <a href="tel:01842781978" className="hover:underline">
                +88-01842781978
              </a>
            </div>
            {/* Language Selection */}
            <div className="flex items-center gap-1">
              <span>{t("navbar.language")}:&nbsp;</span>
              <LanguageSelector />
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="bg-white dark:bg-zinc-900">
          <div className="container">
            <div className="flex h-16 items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                {/* Logo */}
                <div className="mr-4 flex items-center gap-2">
                  <div className="relative size-14 shrink-0 overflow-hidden">
                    <Image
                      src="/assets/boedl1.png"
                      alt="logo"
                      className="h-full w-full object-cover"
                      height="56"
                      width="56"
                    />
                  </div>
                  <div className="ml-0 shrink-0 text-lg sm:text-xl md:text-xl 2xl:ml-3 2xl:text-2xl">
                    <Link
                      href="/"
                      className="flex items-center tracking-wide text-white transition duration-300 ease-in-out hover:text-primary"
                    >
                      <span className="whitespace-nowrap font-bold text-primary">
                        Birds
                      </span>
                      <span className="ml-1 inline-block bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
                        Of Eden
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Menu */}
                <NavigationMenu className="hidden xl:flex">
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        {t("navbar.home")}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="flex flex-col p-3">
                          <Link
                            href="/"
                            className={cn(
                              "flex items-center gap-2 whitespace-nowrap rounded px-3 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-700/50",
                              "/" == url
                                ? "text-blue-500"
                                : "text-black/80 dark:text-white/80",
                            )}
                          >
                            <Home className="h-4 w-4" />
                            {t("navbar.home")}
                          </Link>
                          <Link
                            href="/about-us"
                            className={cn(
                              "flex items-center gap-2 whitespace-nowrap rounded px-3 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-700/50",
                              "/about-us" == url
                                ? "text-blue-500"
                                : "text-black/80 dark:text-white/80",
                            )}
                          >
                            <Info className="h-4 w-4" />
                            {t("navbar.about")}
                          </Link>
                          <Link
                            href="/team"
                            className={cn(
                              "flex items-center gap-2 whitespace-nowrap rounded px-3 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-700/50",
                              "/team" == url
                                ? "text-blue-500"
                                : "text-black/80 dark:text-white/80",
                            )}
                          >
                            <Users className="h-4 w-4" />
                            {t("navbar.team")}
                          </Link>
                          <Link
                            href="/our-service"
                            className={cn(
                              "flex items-center gap-2 whitespace-nowrap rounded px-3 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-700/50",
                              "/our-service" == url
                                ? "text-blue-500"
                                : "text-black/80 dark:text-white/80",
                            )}
                          >
                            <Wrench className="h-4 w-4" />
                            {t("navbar.services")}
                          </Link>
                          <Link
                            href="/contact"
                            className={cn(
                              "flex items-center gap-2 whitespace-nowrap rounded px-3 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-700/50",
                              "/contact" == url
                                ? "text-blue-500"
                                : "text-black/80 dark:text-white/80",
                            )}
                          >
                            <Phone className="h-4 w-4" />
                            {t("navbar.contact")}
                          </Link>
                          <Link
                            href="/blogs"
                            className={cn(
                              "flex items-center gap-2 whitespace-nowrap rounded px-3 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-700/50",
                              "/blogs" == url
                                ? "text-blue-500"
                                : "text-black/80 dark:text-white/80",
                            )}
                          >
                            <BookOpen className="h-4 w-4" />
                            {t("navbar.blogs")}
                          </Link>
                          <Link
                            href="/privacy"
                            className={cn(
                              "flex items-center gap-2 whitespace-nowrap rounded px-3 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-700/50",
                              "/privacy" == url
                                ? "text-blue-500"
                                : "text-black/80 dark:text-white/80",
                            )}
                          >
                            <Shield className="h-4 w-4" />
                            {t("navbar.privacy")}
                          </Link>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        <Link href="/hardware">{t("navbar.hardware")}</Link>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="flex w-[400px] flex-col gap-4 p-3">
                          <div className="flex gap-4">
                            <div className="h-36 w-36 shrink-0 overflow-hidden rounded bg-zinc-800">
                              <Image
                                className="rounded"
                                src="https://picsum.photos/200"
                                alt="Hardware"
                                height="144"
                                width="144"
                              />
                            </div>
                            <div className="mb-4">
                              <h1 className="text-lg font-semibold">
                                {t("navbar.hardwareProducts")}
                              </h1>
                              <p className="text-sm text-black/70 dark:text-white/70">
                                {t("navbar.exploreHardware")}
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-col gap-2">
                            <h2 className="mb-2 text-lg font-semibold">
                              {t("navbar.hardwareCategories")}
                            </h2>
                            <div className="flex gap-8 p-2">
                              <div className="w-1/2">
                                <div className="flex flex-col gap-3">
                                  <Link
                                    href="/hardware/laptop"
                                    className={cn(
                                      "flex items-center gap-2 hover:underline",
                                      "/hardware/laptop" == url
                                        ? "text-blue-500"
                                        : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500",
                                    )}
                                  >
                                    <Cpu className="h-4 w-4" />
                                    {t("navbar.laptop")}
                                  </Link>
                                  <Link
                                    href="/hardware/printer"
                                    className={cn(
                                      "flex items-center gap-2 hover:underline",
                                      "/hardware/printer" == url
                                        ? "text-blue-500"
                                        : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500",
                                    )}
                                  >
                                    <Database className="h-4 w-4" />
                                    {t("navbar.printer")}
                                  </Link>
                                </div>
                              </div>
                              <div className="w-1/2">
                                <div className="flex flex-col gap-3">
                                  <Link
                                    href="/hardware/keyboard"
                                    className={cn(
                                      "flex items-center gap-2 hover:underline",
                                      "/hardware/keyboard" == url
                                        ? "text-blue-500"
                                        : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500",
                                    )}
                                  >
                                    <Wrench className="h-4 w-4" />
                                    {t("navbar.keyboard")}
                                  </Link>
                                  <Link
                                    href="/hardware/mouse"
                                    className={cn(
                                      "flex items-center gap-2 hover:underline",
                                      "/hardware/mouse" == url
                                        ? "text-blue-500"
                                        : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500",
                                    )}
                                  >
                                    <Phone className="h-4 w-4" />
                                    {t("navbar.mouse")}
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        <Link href="OurService">{t("navbar.services")}</Link>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="flex w-[550px] flex-col gap-4 p-3">
                          <div className="flex gap-4">
                            <div className="h-36 w-36 shrink-0 overflow-hidden rounded bg-zinc-800">
                              <Image
                                className="rounded"
                                src="https://picsum.photos/200"
                                alt="Service"
                                height="144"
                                width="144"
                              />
                            </div>
                            <div className="mb-4">
                              <h1 className="text-lg font-semibold">
                                {t("navbar.bestSelling")}
                              </h1>
                              <p className="text-sm text-black/70 dark:text-white/70">
                                {t("navbar.exploreServices")}
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-4">
                            <div className="border-r pr-4">
                              <h2 className="mb-2 text-lg font-semibold">
                                {t("navbar.development")}
                              </h2>
                              <div className="flex flex-col gap-3">
                                <Link
                                  href="/OurService"
                                  className={cn(
                                    "flex items-center gap-2 hover:underline",
                                    "/OurService" == url
                                      ? "text-blue-500"
                                      : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500",
                                  )}
                                >
                                  <Database className="h-4 w-4" />
                                  {t("navbar.bigdata")}
                                </Link>
                                <Link
                                  href="/services"
                                  className={cn(
                                    "flex items-center gap-2 hover:underline",
                                    "/services" == url
                                      ? "text-blue-500"
                                      : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500",
                                  )}
                                >
                                  <Wrench className="h-4 w-4" />
                                  {t("navbar.regularServices")}
                                </Link>
                                <Link
                                  href="/Web"
                                  className={cn(
                                    "flex items-center gap-2 hover:underline",
                                    "/Web" == url
                                      ? "text-blue-500"
                                      : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500",
                                  )}
                                >
                                  <Globe className="h-4 w-4" />
                                  {t("navbar.webdev")}
                                </Link>
                                <Link
                                  href="/IOS"
                                  className={cn(
                                    "flex items-center gap-2 hover:underline",
                                    "/IOS" == url
                                      ? "text-blue-500"
                                      : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500",
                                  )}
                                >
                                  <Smartphone className="h-4 w-4" />
                                  {t("navbar.iosdev")}
                                </Link>
                                <Link
                                  href="/Mobile"
                                  className={cn(
                                    "flex items-center gap-2 hover:underline",
                                    "/Mobile" == url
                                      ? "text-blue-500"
                                      : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500",
                                  )}
                                >
                                  <Smartphone className="h-4 w-4" />
                                  {t("navbar.mobiledev")}
                                </Link>
                              </div>
                            </div>
                            <div>
                              <h2 className="mb-2 text-lg font-semibold">
                                {t("navbar.otherServices")}
                              </h2>
                              <div className="flex flex-col gap-3">
                                <Link
                                  href="/payment-gateway"
                                  className={cn(
                                    "flex items-center gap-2 hover:underline",
                                    "/payment-gateway" == url
                                      ? "text-blue-500"
                                      : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500",
                                  )}
                                >
                                  <CreditCard className="h-4 w-4" />
                                  {t("navbar.payment")}
                                </Link>
                                <Link
                                  href="/quickbook-integration"
                                  className={cn(
                                    "flex items-center gap-2 hover:underline",
                                    "/quickbook-integration" == url
                                      ? "text-blue-500"
                                      : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500",
                                  )}
                                >
                                  <BookCheck className="h-4 w-4" />
                                  {t("navbar.quickbooks")}
                                </Link>
                                <Link
                                  href="/zoho-integration"
                                  className={cn(
                                    "flex items-center gap-2 hover:underline",
                                    "/zoho-integration" == url
                                      ? "text-blue-500"
                                      : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500",
                                  )}
                                >
                                  <Boxes className="h-4 w-4" />
                                  {t("navbar.zoho")}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        <Link href="/technologies">
                          {t("navbar.technologies")}
                        </Link>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="flex min-w-[550px] flex-col gap-4 p-3">
                          <div className="flex gap-4">
                            <div className="shrink-0 overflow-hidden rounded bg-zinc-800">
                              <Image
                                className="rounded"
                                src="https://picsum.photos/200"
                                alt="Service"
                                width="144"
                                height="144"
                              />
                            </div>
                            <div className="mb-4">
                              <h1 className="text-lg font-semibold">
                                {t("navbar.ourTechnologies")}
                              </h1>
                              <p className="text-sm text-black/70 dark:text-white/70">
                                {t("navbar.exploreTechnologies")}
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-4">
                            <div className="border-r pr-4">
                              <h2 className="text-md mb-2 font-semibold">
                                {t("navbar.technologies")}
                              </h2>
                              <div className="flex flex-col gap-3">
                                <Link
                                  href="/technologies"
                                  className={cn(
                                    "flex items-center gap-2 hover:underline",
                                    "/technologies" == url
                                      ? "text-blue-500"
                                      : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500",
                                  )}
                                >
                                  <Globe className="h-4 w-4" />
                                  {t("navbar.frontend")}
                                </Link>
                              </div>
                            </div>
                            <div>
                              <h2 className="text-md mb-2 font-semibold">
                                {t("navbar.other")}
                              </h2>
                              <div className="flex flex-col gap-3">
                                <Link
                                  href="/technologies?tab=backend"
                                  className={cn(
                                    "flex items-center gap-2 hover:underline",
                                    "/technologies" == url
                                      ? "text-blue-500"
                                      : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500",
                                  )}
                                >
                                  <Database className="h-4 w-4" />
                                  {t("navbar.backend")}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        <Link href="/products">{t("navbar.products")}</Link>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="flex min-w-[600px] flex-col gap-4 p-3">
                          <div className="flex gap-4">
                            <div className="shrink-0 overflow-hidden rounded bg-zinc-800">
                              <Image
                                className="rounded"
                                src="https://picsum.photos/200"
                                alt="Service"
                                width="144"
                                height="144"
                              />
                            </div>
                            <div className="mb-4">
                              <h1 className="text-lg font-semibold">
                                {t("navbar.ourProducts")}
                              </h1>
                              <p className="text-sm text-black/70 dark:text-white/70">
                                {t("navbar.exploreProducts")}
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-4">
                            <div className="border-r pr-4">
                              <h2 className="text-md mb-2 font-semibold">
                                {t("navbar.products")}
                              </h2>
                              <div className="flex flex-col gap-3">
                                <Link
                                  href="/products?tab=govt"
                                  className={cn(
                                    "flex items-center gap-2 hover:underline",
                                    "/products/govt" == url
                                      ? "text-blue-500"
                                      : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500",
                                  )}
                                >
                                  <Building2 className="h-4 w-4" />
                                  {t("navbar.govt")}
                                </Link>
                                <Link
                                  href="/products?tab=seo"
                                  className={cn(
                                    "flex items-center gap-2 hover:underline",
                                    "/products/seo" == url
                                      ? "text-blue-500"
                                      : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500",
                                  )}
                                >
                                  <BarChart className="h-4 w-4" />
                                  {t("navbar.seo")}
                                </Link>
                                <Link
                                  href="/products?tab=financial"
                                  className={cn(
                                    "flex items-center gap-2 hover:underline",
                                    "/products/financial" == url
                                      ? "text-blue-500"
                                      : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500",
                                  )}
                                >
                                  <Building className="h-4 w-4" />
                                  {t("navbar.financial")}
                                </Link>
                              </div>
                            </div>
                            <div>
                              <h2 className="text-md mb-2 font-semibold">
                                {t("navbar.otherProducts")}
                              </h2>
                              <div className="flex flex-col gap-3">
                                <Link
                                  href="/products?tab=corporate"
                                  className={cn(
                                    "flex items-center gap-2 hover:underline",
                                    "/products/corporate" == url
                                      ? "text-blue-500"
                                      : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500",
                                  )}
                                >
                                  <Building2 className="h-4 w-4" />
                                  {t("navbar.corporate")}
                                </Link>
                                <Link
                                  href="/products?tab=ecommerce"
                                  className={cn(
                                    "flex items-center gap-2 hover:underline",
                                    "/products/ecommerce" == url
                                      ? "text-blue-500"
                                      : "text-black/70 hover:text-blue-500 dark:text-white/70 dark:hover:text-blue-500",
                                  )}
                                >
                                  <ShoppingCart className="h-4 w-4" />
                                  {t("navbar.ecommerce")}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem
                      asChild
                      className={cn(
                        "whitespace-nowrap rounded-lg px-4 py-2 tracking-wide transition-colors hover:bg-zinc-200 focus:outline-none dark:hover:bg-zinc-700/50 dark:focus:bg-zinc-700/50 dark:active:bg-zinc-700/50",
                        "/hardware" == url ? "text-blue-500" : "",
                      )}
                    >
                      <Link
                        href="/hardware"
                        className="flex items-center gap-2 whitespace-nowrap"
                      >
                        {t("navbar.hardware")}
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem
                      asChild
                      className={cn(
                        "whitespace-nowrap rounded-lg px-4 py-2 tracking-wide transition-colors hover:bg-zinc-200 focus:outline-none dark:hover:bg-zinc-700/50 dark:focus:bg-zinc-700/50 dark:active:bg-zinc-700/50",
                        "/drones" == url ? "text-blue-500" : "",
                      )}
                    >
                      <Link href="/drones" className="flex items-center gap-2">
                        {t("navbar.drones")}
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>

              {/* Dark mode & Others */}
              <div className="hidden items-center gap-4 xl:flex">
                <button
                  className="cursor-pointer flex aspect-square h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2"
                  onClick={() =>
                    theme == "light" ? setTheme("dark") : setTheme("light")
                  }
                >
                  {mounted && theme === "dark" ? (
                    <BiSolidSun className="h-6 w-6 shrink-0" />
                  ) : (
                    <BiSolidMoon className="h-6 w-6 shrink-0" />
                  )}
                </button>
                <Link href="/career" className="link boxshadow">
                  {t("navbar.career")}
                </Link>
              </div>
              <div className="flex items-center gap-4 xl:hidden">
                {mounted && theme === "dark" ? (
                  <BiSolidSun
                    onClick={() => setTheme("light")}
                    className="cursor-pointer text-2xl"
                  />
                ) : (
                  <BiSolidMoon
                    onClick={() => setTheme("dark")}
                    className="cursor-pointer text-2xl"
                  />
                )}
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
      <ResponsiveMenu showMenu={showMenu} ref={mobileRef} />
    </>
  );
};

export default Navbar;
