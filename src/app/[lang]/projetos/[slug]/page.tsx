import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CompactHeader } from "@/components/Header";
import { CompactFooter } from "@/components/Footer";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectPager from "@/components/project/ProjectPager";
import { projects } from "@/content/projects";
import { fill, getDictionary, isLang, langs, pad } from "@/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return langs.flatMap((lang) => projects.map((p) => ({ lang, slug: p.slug })));
}

function resolve(lang: string, slug: string) {
  if (!isLang(lang)) return null;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return null;
  return { lang, index, project: projects[index] };
}

export async function generateMetadata({ params }: PageProps<"/[lang]/projetos/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const found = resolve(lang, slug);
  if (!found) return {};
  return {
    title: `${found.project.title[found.lang]} — Marcello Miranda`,
    description: found.project.summary[found.lang],
    alternates: {
      canonical: `/${lang}/projetos/${slug}`,
      languages: Object.fromEntries(langs.map((l) => [getDictionary(l).htmlLang, `/${l}/projetos/${slug}`])),
    },
  };
}

export default async function ProjectPage({ params }: PageProps<"/[lang]/projetos/[slug]">) {
  const { lang: rawLang, slug } = await params;
  const found = resolve(rawLang, slug);
  if (!found) notFound();
  const { lang, index, project } = found;
  const dict = getDictionary(lang);

  return (
    <>
      <CompactHeader lang={lang} dict={dict} />
      <nav
        aria-label={dict.project.navLabel}
        className="flex flex-wrap justify-between gap-4 border-b-2 border-ink px-8 py-4 text-[15px]"
      >
        <Link href={`/${lang}#trabalhos`} className="navlink">
          {dict.project.back}
        </Link>
        <span>{fill(dict.project.count, { n: pad(index + 1), total: pad(projects.length) })}</span>
      </nav>
      <ProjectHero project={project} index={index} lang={lang} dict={dict} />
      <ProjectPager index={index} lang={lang} dict={dict} />
      <CompactFooter />
    </>
  );
}
