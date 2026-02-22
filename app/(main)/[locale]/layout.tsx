import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/main/navbar";
import Particles from "@/components/ui/particles";
import Footer from "@/components/main/footer";

export default async function MainLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!routing.locales.includes(locale as never)) {
    notFound();
  }

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <div className="pointer-events-none fixed inset-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <NextIntlClientProvider messages={messages}>
        <Navbar />
        {children}
        <Footer />
      </NextIntlClientProvider>
    </div>
  );
}
