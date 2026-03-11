import type { Metadata } from "next";
import Link from "next/link";
import news from "@/data/news.json";

export const metadata: Metadata = {
  title: "News",
  description:
    "Investment announcements, portfolio updates, essays, and firm news from Fireroad.",
};

export default function NewsPage() {
  return (
    <section className="bg-cream-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-3xl">
          News
        </h1>
        <p className="mt-6 text-lg md:text-xl text-brown-200 leading-relaxed max-w-2xl">
          Investment announcements, essays, and updates from Fireroad.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article) => (
            <Link
              key={article.slug}
              href={`/news/${article.slug}`}
              className="group bg-cream-200 rounded-xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
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
                <h2 className="text-lg md:text-xl font-bold text-brown-300 group-hover:text-teal-dark transition-colors leading-snug">
                  {article.title}
                </h2>
                <p className="mt-3 text-sm text-brown-200 leading-relaxed">
                  {article.excerpt}
                </p>
                <p className="mt-4 text-xs text-brown-100 font-medium">
                  By {article.author}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
