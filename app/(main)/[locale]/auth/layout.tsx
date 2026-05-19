import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import type { ReactNode } from "react";

import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import AuthSessionProvider from "@/lib/session-provider";

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  // `Navbar` uses `useTranslations()`, so auth routes also need NextIntl context.
  // We don't have a locale segment here, so we rely on next-intl's locale resolution.
  await getLocale();
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <AuthSessionProvider>
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">{children}</main>
        </div>
      </AuthSessionProvider>
    </NextIntlClientProvider>
  );
}
