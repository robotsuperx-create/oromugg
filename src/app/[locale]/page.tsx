import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Proof } from "@/components/Proof";
import { Services } from "@/components/Services";
import { Tech } from "@/components/Tech";
import { Creators } from "@/components/Creators";
import { Packages } from "@/components/Packages";
import { Process } from "@/components/Process";
import { Work } from "@/components/Work";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <>
      <Header locale={locale} t={t.nav} />
      <main className="flex-1">
        <Hero t={t.hero} />
        <Proof items={t.proof} />
        <Services t={t.services} />
        <Tech t={t.tech} />
        <Creators t={t.creators} cta={t.contact.whatsapp} />
        <Packages t={t.packages} />
        <Process t={t.process} />
        <Work t={t.work} />
        <Contact t={t.contact} locale={locale} />
      </main>
      <Footer t={t.footer} />
    </>
  );
}
