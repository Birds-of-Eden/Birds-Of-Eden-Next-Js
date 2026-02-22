import React from "react";
import { getTranslations } from "next-intl/server";
import GetStartedContent from "@/components/main/home/GetStartedContent";

const GetStartedPage = async () => {
  const t = await getTranslations();

  const title = t("home.bannerDetails.title");
  const description = t("home.bannerDetails.description");
  const features = t.raw("home.bannerDetails.features");
  const featuresTitle = t("home.bannerDetails.featuresTitle");
  const getStartedMessage = t("home.bannerDetails.getStartedMessage");
  const contactUs = t("home.bannerDetails.contactUs");

  return (
    <div>
      <GetStartedContent
        title={title}
        description={description}
        features={features}
        featuresTitle={featuresTitle}
        getStartedMessage={getStartedMessage}
        contactUs={contactUs}
      />
    </div>
  );
};

export default GetStartedPage;
