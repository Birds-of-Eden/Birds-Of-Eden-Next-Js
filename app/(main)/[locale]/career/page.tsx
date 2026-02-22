import { getTranslations } from "next-intl/server";
import JobPostListContent from "@/components/main/Career/JobPostListContent";

import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  const title = t("JobPostPage.metadata.title"); // Assuming you have a metadata title in your translations
  const description = t("JobPostPage.metadata.description"); // Assuming you have a metadata description in your translations

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
    },
  };
}

const JobPostList = async () => {
  const t = await getTranslations();
  const jobPosts = t.raw("JobPostPage.jobs");

  // Pre-translate all the strings needed in the Client Component
  const translatedStrings = {
    title: t("JobPostPage.title"),
    locationLabel: t("JobPostPage.location"),
    applyButton: t("JobPostPage.applyButton"),
    applyFor: t("JobPostPage.applyFor"),
    formNamePlaceholder: t("JobPostPage.form.namePlaceholder"),
    formEmailPlaceholder: t("JobPostPage.form.emailPlaceholder"),
    formAddressPlaceholder: t("JobPostPage.form.addressPlaceholder"),
    formResumeUpload: t("JobPostPage.form.resumeUpload"),
    formCoverLetterUpload: t("JobPostPage.form.coverLetterUpload"),
    formSubmitButton: t("JobPostPage.form.submitButton"),
  };

  return (
    <div>
      <JobPostListContent
        jobPosts={jobPosts}
        translatedStrings={translatedStrings}
      />
    </div>
  );
};

export default JobPostList;
