import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import news from "@/data/news.json";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return news.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = news.find((a) => a.slug === slug);
  if (!article) return { title: "Not Found" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = news.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <section className="bg-cream-100">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <Link
          href="/news"
          className="text-sm text-brown-100 hover:text-brown-300 transition-colors font-medium"
        >
          &larr; Back to News
        </Link>

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-semibold uppercase tracking-wide text-teal-dark bg-teal-dark/10 px-2.5 py-1 rounded-full">
              {article.category}
            </span>
            <span className="text-xs text-brown-100">
              {new Date(article.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            {article.title}
          </h1>

          <p className="mt-4 text-sm text-brown-100 font-medium">
            By {article.author}
          </p>

          <div className="mt-12 text-lg leading-relaxed text-brown-200 space-y-6">
            {article.body.split("\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
