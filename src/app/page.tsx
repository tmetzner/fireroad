import Link from "next/link";
import portfolio from "@/data/portfolio.json";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center bg-cream-100 overflow-hidden">
        {/* Layered background: topo lines, mountain silhouettes, grit texture */}
        <div className="topo-hero" aria-hidden="true" />
        {/* Warm gradient vignette to ground the imagery */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 20% 50%, rgba(255,253,248,0.95) 0%, rgba(255,253,248,0.4) 60%, transparent 100%), linear-gradient(to bottom, rgba(255,253,248,0.9) 0%, transparent 30%, transparent 60%, rgba(241,231,210,0.5) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-28 md:py-40">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight max-w-5xl">
            Small businesses are the backbone of America.
          </h1>
          <p className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight max-w-5xl text-brown-200">
            But the technology built for them has lagged for decades.
          </p>
          <p className="mt-10 text-xl md:text-2xl font-semibold text-brown-300 max-w-2xl leading-snug">
            Fireroad backs founders building technology for the backbone of the
            economy.
          </p>
          <p className="mt-5 text-lg md:text-xl text-brown-200 max-w-2xl leading-relaxed">
            We invest in technology that helps small businesses stay local, scale
            efficiently, and compete in the AI economy.
          </p>
          <div className="mt-12">
            <a
              href="https://www.fireroad.vc/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-brown-300 text-cream-200 font-semibold text-base tracking-wide hover:bg-brown-200 transition-colors"
            >
              Apply for funding
            </a>
          </div>
        </div>
      </section>

      {/* Real Economy */}
      <section className="bg-cream-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28 md:py-36">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight max-w-3xl">
            Small businesses power local economies.
          </h2>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-6 max-w-3xl">
            {[
              "Contractors",
              "Manufacturers",
              "Restaurants",
              "Healthcare practices",
              "Logistics companies",
              "Trades",
            ].map((industry) => (
              <p
                key={industry}
                className="text-lg md:text-xl font-medium text-brown-200 border-l-2 border-orange-dark/40 pl-4"
              >
                {industry}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Local Ownership */}
      <section className="bg-cream-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28 md:py-36">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                But local ownership is shrinking.
              </h2>
            </div>
            <div>
              <p className="text-lg md:text-xl text-brown-200 leading-relaxed">
                Small businesses face increasing pressure from national chains,
                private equity consolidation, and technology that was never
                designed for how these companies actually operate.
              </p>
              <p className="mt-8 text-xl md:text-2xl font-semibold text-brown-300 leading-snug">
                Technology should strengthen local ownership, not replace it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="bg-cream-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28 md:py-36">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight max-w-4xl">
            For decades building powerful software required large teams and
            enormous capital.
          </h2>
          <p className="mt-10 text-2xl md:text-3xl font-bold text-orange-dark max-w-3xl">
            Today that is no longer true.
          </p>
          <div className="mt-10 max-w-2xl space-y-5">
            <p className="text-lg md:text-xl text-brown-200 leading-relaxed">
              Cloud infrastructure, modern development tools, and artificial
              intelligence allow small teams to build powerful technology faster
              than ever before.
            </p>
            <p className="text-lg md:text-xl text-brown-300 leading-relaxed font-medium">
              This enables a new generation of companies serving small
              businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Founders We Back */}
      <section className="bg-brown-300 text-cream-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28 md:py-36">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight max-w-4xl">
            The best founders building these companies will come from inside the
            industries they serve.
          </h2>
          <div className="mt-10 max-w-2xl space-y-5">
            <p className="text-lg md:text-xl text-brown-100 leading-relaxed">
              Operators who understand the real problems.
            </p>
            <p className="text-lg md:text-xl text-brown-100 leading-relaxed">
              People who have run restaurants, construction companies, logistics
              businesses, and service organizations.
            </p>
          </div>
          <p className="mt-10 text-xl md:text-2xl font-semibold text-cream-200 max-w-3xl">
            These are the founders Fireroad backs.
          </p>
        </div>
      </section>

      {/* What Fireroad Does */}
      <section className="bg-cream-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28 md:py-36">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight max-w-4xl">
            Fireroad backs founders building technology for small businesses.
          </h2>
          <p className="mt-10 text-lg md:text-xl text-brown-200 leading-relaxed max-w-2xl">
            We partner with entrepreneurs building software that helps
            businesses:
          </p>
          <ul className="mt-8 space-y-4 max-w-2xl">
            {[
              "operate more efficiently",
              "serve customers better",
              "scale without losing independence",
              "compete with larger organizations",
            ].map((item) => (
              <li
                key={item}
                className="text-lg md:text-xl text-brown-300 font-medium pl-5 border-l-2 border-orange-dark/40"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-14 text-xl md:text-2xl font-bold text-brown-300 max-w-3xl">
            Technology for the backbone of the economy.
          </p>
        </div>
      </section>

      {/* Selected Portfolio */}
      <section className="relative bg-cream-200 overflow-hidden">
        {/* Subtle topo texture divider */}
        <div className="topo-divider" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-28 md:py-36">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            Selected portfolio
          </h2>
          <p className="mt-4 text-lg md:text-xl text-brown-200 max-w-2xl leading-relaxed">
            Companies solving real problems for small businesses.
          </p>

          <div className="mt-16 flex flex-wrap items-center gap-x-12 gap-y-8 md:gap-x-16 md:gap-y-10">
            {portfolio.map((company) => (
              <span
                key={company.name}
                className="text-lg md:text-xl lg:text-2xl font-semibold text-brown-300/80 hover:text-brown-300 transition-colors tracking-tight"
              >
                {company.name}
              </span>
            ))}
          </div>

          <div className="mt-14">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-brown-300 font-semibold text-base tracking-wide hover:text-brown-200 transition-colors group"
            >
              View Portfolio
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Venture Building Has Evolved */}
      <section className="bg-cream-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28 md:py-36">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight max-w-3xl">
            Venture building has evolved.
          </h2>
          <div className="mt-10 max-w-2xl space-y-5">
            <p className="text-lg md:text-xl text-brown-200 leading-relaxed">
              Technology makes it possible to build capital-efficient businesses
              with small teams.
            </p>
            <p className="text-lg md:text-xl text-brown-300 leading-relaxed font-medium">
              Fireroad invests using structures that align with the kind of
              businesses founders are building.
            </p>
            <p className="text-lg md:text-xl text-brown-200 leading-relaxed">
              Because not every great company needs to follow the same playbook.
            </p>
          </div>
        </div>
      </section>

      {/* Fireroad Platform */}
      <section className="bg-cream-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28 md:py-36">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <div className="border-t-2 border-teal-dark pt-8">
              <h3 className="text-xl md:text-2xl font-bold text-brown-300 tracking-tight">
                Fireroad Ventures
              </h3>
              <p className="mt-4 text-brown-200 leading-relaxed text-base md:text-lg">
                Investing in founders building technology for small businesses.
              </p>
            </div>
            <div className="border-t-2 border-green-dark pt-8">
              <h3 className="text-xl md:text-2xl font-bold text-brown-300 tracking-tight">
                Fireroad HoldCo
              </h3>
              <p className="mt-4 text-brown-200 leading-relaxed text-base md:text-lg">
                Partnering with owners to grow enduring service companies.
              </p>
            </div>
            <div className="border-t-2 border-orange-dark pt-8">
              <h3 className="text-xl md:text-2xl font-bold text-brown-300 tracking-tight">
                Fireroad Foundry
              </h3>
              <p className="mt-4 text-brown-200 leading-relaxed text-base md:text-lg">
                Developing technology to modernize operations across the
                platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brown-300 text-cream-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28 md:py-36 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight max-w-3xl mx-auto">
            The backbone of the economy deserves better technology.
          </h2>
          <div className="mt-12">
            <a
              href="https://www.fireroad.vc/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-cream-200 text-brown-300 font-semibold text-base tracking-wide hover:bg-cream-100 transition-colors"
            >
              Apply for funding
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
