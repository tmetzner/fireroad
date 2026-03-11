import type { Metadata } from "next";
import Image from "next/image";
import portfolio from "@/data/portfolio.json";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Companies backed by Fireroad — founders building technology for small businesses across construction, healthcare, logistics, and more.",
};

export default function PortfolioPage() {
  return (
    <section className="bg-cream-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-3xl">
          Portfolio
        </h1>
        <p className="mt-6 text-lg md:text-xl text-brown-200 leading-relaxed max-w-2xl">
          Companies building technology for the backbone of the economy.
        </p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolio.map((company) => (
            <a
              key={company.name}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-cream-200 rounded-xl p-6 md:p-8 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                {company.logo ? (
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={32}
                    height={32}
                    className="h-8 w-8 opacity-60"
                  />
                ) : (
                  <div className="h-8 w-8 rounded bg-cream-300 flex items-center justify-center text-brown-200 text-xs font-bold">
                    {company.name.charAt(0)}
                  </div>
                )}
                <h2 className="text-lg font-bold text-brown-300 group-hover:text-teal-dark transition-colors">
                  {company.name}
                </h2>
              </div>
              <p className="text-sm text-brown-200 leading-relaxed">
                {company.description}
              </p>
              <p className="mt-4 text-xs text-brown-100 font-medium uppercase tracking-wide">
                {company.fund}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
