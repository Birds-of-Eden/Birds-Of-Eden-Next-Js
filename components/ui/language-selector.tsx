"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent } from "react";
import Image from "next/image";

const LanguageSelector = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    {
      code: "en",
      title: "English",
      img: "/flags/us.svg",
    },
    {
      code: "bn",
      title: "Bengali",
      img: "/flags/bd.svg",
    },
    {
      code: "ar",
      title: "Arabic",
      img: "/flags/sa.svg",
    },
    {
      code: "ja",
      title: "Japanese",
      img: "/flags/jp.svg",
    },
    {
      code: "zh",
      title: "Chinese",
      img: "/flags/cn.svg",
    },
  ];

  const handleLanguageChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const newLocale = event.target.value;

    const segments = pathname.split("/").filter(Boolean);
    segments[0] = newLocale;
    const newPath = `/${segments.join("/")}`;

    router.push(newPath);
    router.refresh();
  };

  return (
    <>
      <div className="hidden items-center gap-3 xl:flex">
        {languages.map((lang) => (
          <label
            key={lang.code}
            className={`flex size-6 shrink-0 cursor-pointer items-center justify-center ${
              locale === lang.code
                ? "ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-black"
                : ""
            }`}
            title={lang.title}
          >
            <input
              type="radio"
              name="language"
              value={lang.code}
              className="appearance-none"
              checked={locale === lang.code}
              onChange={handleLanguageChange}
            />
            <Image src={lang.img} alt={lang.title} width="24" height="24" />
          </label>
        ))}
      </div>

      {/* Mobile language selector */}
      <div className="relative xl:hidden">
        <select
          className="focus:outline-none dark:bg-zinc-800"
          value={locale}
          onChange={handleLanguageChange}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.title}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default LanguageSelector;
