import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Work from "@/components/home/Work";
import Crafts from "@/components/home/Crafts";
import About from "@/components/home/About";
import { getDictionary, isLang, langs } from "@/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const dict = getDictionary(lang);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: Object.fromEntries(langs.map((l) => [getDictionary(l).htmlLang, `/${l}`])),
    },
  };
}

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <Header lang={lang} dict={dict} />
      <Hero lang={lang} dict={dict} />
      <Work lang={lang} dict={dict} />
      <Crafts dict={dict} />
      <About dict={dict} />
      <Footer dict={dict} />
    </>
  );
}
