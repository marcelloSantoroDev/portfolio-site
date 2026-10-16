import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CompactHeader } from "@/components/Header";
import { CompactFooter } from "@/components/Footer";
import Mountains from "@/components/Mountains";
import { repoUrl } from "@/content/site";
import { getDictionary, isLang, langs, pad } from "@/i18n";

export async function generateMetadata({ params }: PageProps<"/[lang]/sobre-este-site">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const dict = getDictionary(lang);
  return {
    title: dict.siteInfo.metaTitle,
    description: dict.siteInfo.metaDescription,
    alternates: {
      canonical: `/${lang}/sobre-este-site`,
      languages: Object.fromEntries(langs.map((l) => [getDictionary(l).htmlLang, `/${l}/sobre-este-site`])),
    },
  };
}

export default async function SiteInfoPage({ params }: PageProps<"/[lang]/sobre-este-site">) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const dict = getDictionary(lang);
  const t = dict.siteInfo;

  return (
    <>
      <CompactHeader lang={lang} dict={dict} />
      <nav
        aria-label={t.navLabel}
        className="flex flex-wrap justify-between gap-4 border-b-2 border-ink px-8 py-4 text-[15px]"
      >
        <Link href={`/${lang}`} className="navlink">
          {t.back}
        </Link>
        <span>{t.title}</span>
      </nav>

      <main>
        <section className="flex flex-wrap border-b-2 border-ink">
          <div className="flex flex-[1_1_400px] flex-col gap-7 px-8 py-12">
            <p className="rise1 m-0 text-[13px] font-semibold tracking-[0.12em] uppercase">{t.eyebrow}</p>
            <h1 className="rise1 m-0 font-serif text-[clamp(2.6rem,4.6vw,4.6rem)] leading-[1.02] font-normal tracking-[-0.02em]">
              {t.title}
            </h1>
            <div className="rise2 flex max-w-[34rem] flex-col gap-4">
              {t.intro.map((paragraph) => (
                <p key={paragraph} className="m-0 text-[18px] leading-[1.6]">
                  {paragraph}
                </p>
              ))}
            </div>
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="visit rise3 inline-flex min-h-14 items-center gap-2.5 self-start border-2 border-ink bg-ink px-7 text-[16px] font-semibold text-paper no-underline"
            >
              {t.repo}
            </a>
          </div>
          <div className="relative flex min-h-[30rem] flex-[1_1_480px] flex-col gap-6 overflow-hidden border-l-2 border-ink bg-sky px-8 pt-12 pb-40 max-[760px]:border-t-2 max-[760px]:border-l-0">
            <Mountains className="h-36" />
            <h2 className="relative m-0 text-[13px] font-bold tracking-[0.12em] uppercase">{t.stackLabel}</h2>
            <ul className="relative m-0 flex list-none flex-col gap-1 p-0 font-serif text-[clamp(2rem,3.6vw,3.4rem)] leading-[1.1]">
              {t.stack.map((item) => (
                <li key={item} className="craft">
                  {item}
                </li>
              ))}
            </ul>
            <p className="relative m-0 max-w-[28rem] text-[15px] leading-[1.55]">{t.stackNote}</p>
          </div>
        </section>

        <section aria-labelledby="processo" className="border-b-2 border-ink">
          <h2
            id="processo"
            className="m-0 px-8 pt-12 pb-8 font-serif text-[clamp(2.2rem,4vw,3.6rem)] font-normal tracking-[-0.02em]"
          >
            {t.processTitle}
          </h2>
          <ol className="m-0 flex list-none flex-wrap border-t-2 border-ink p-0">
            {t.process.map((step, i) => (
              <li
                key={step.title}
                className={`flex flex-[1_1_260px] flex-col gap-4 p-8 ${i > 0 ? "border-l-2 border-ink max-[760px]:border-t-2 max-[760px]:border-l-0" : ""}`}
              >
                <span className="font-wide block text-[3.5rem] leading-none">{pad(i + 1)}</span>
                <h3 className="m-0 font-serif text-[1.6rem] leading-[1.15] font-normal">{step.title}</h3>
                <p className="m-0 text-[16px] leading-[1.55]">{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="decisoes" className="flex flex-wrap border-b-2 border-ink">
          <div className="flex flex-[1_1_360px] flex-col justify-between gap-8 bg-ink px-8 py-12 text-paper">
            <h2 id="decisoes" className="m-0 font-serif text-[2.2rem] leading-[1.1] font-normal">
              {t.decisionsTitle}
            </h2>
            <p className="m-0 max-w-[22rem] text-[15px] leading-[1.55]">{t.decisionsText}</p>
          </div>
          <dl className="m-0 flex flex-[2_1_520px] flex-col gap-8 px-8 py-10">
            {t.decisions.map((d) => (
              <div key={d.title} className="flex max-w-[44rem] flex-col gap-2">
                <dt className="font-serif text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.15]">{d.title}</dt>
                <dd className="m-0 text-[16px] leading-[1.55]">{d.text}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>

      <CompactFooter lang={lang} dict={dict} />
    </>
  );
}
