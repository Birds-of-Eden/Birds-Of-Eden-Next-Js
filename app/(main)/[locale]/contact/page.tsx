import React from "react";
import { getTranslations } from "next-intl/server";
import ContactForm from "@/components/main/home/Contact/ContactForm";
import LocationMap from "@/components/main/home/Contact/LocationMap";

import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  const title = t("contactPage.metadata.title"); // Assuming you have contact metadata in your translations
  const description = t("contactPage.metadata.description"); // Assuming you have contact metadata in your translations

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
    },
  };
}

const ContactPage = async () => {
  const t = await getTranslations();

  const translatedStrings = {
    contactUs: t("contact.contactUs"),
    name: t("contact.name"),
    namePlaceholder: t("contact.namePlaceholder"),
    email: t("contact.email"),
    emailPlaceholder: t("contact.emailPlaceholder"),
    message: t("contact.message"),
    messagePlaceholder: t("contact.messagePlaceholder"),
    sendMessage: t("contact.sendMessage"),
    successMessage: t("contact.successMessage"),
    errorMessage: t("contact.errorMessage"),
    errorAlert: t("contact.errorAlert"),
    ourLocation: t("contact.ourLocation"),
  };

  return (
    <div className="">
      <div className="flex min-h-screen flex-col justify-between bg-slate-100 dark:bg-slate-800">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-8 p-8 md:flex-row md:gap-20 md:space-x-12 md:space-y-0">
          <ContactForm translatedStrings={translatedStrings} />
          <LocationMap ourLocation={translatedStrings.ourLocation} />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
