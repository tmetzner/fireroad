import Link from "next/link";
import Image from "next/image";
import portfolio from "@/data/portfolio.json";

export default function Home() {
  const selectedPortfolio = portfolio.slice(0, 9);

  return (
    <>
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center bg-cream-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-4xl">
            Small businesses are the backbone of America.
            <br className="hidden md:block" />
            <span className="text-brown-200">
              {" "}
              But the technology built for them has lagged for decades.
            </span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl lg:text-3xl font-semibold text-brown-300 max-w-3xl leading-snug">
            Fireroad backs founders building technology for the backbone of the
            economy.
          </p>
          <p className="mt-6 text-lg md:text-xl text-brown-200 max-w-2xl leading-relaxed">
            We invest in technology that helps small businesses stay local, scale
            efficiently, and compete in the AI economy.
          </p>
          <div className="mt-10">
            <a
              href="https://www.fireroad.vc/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-brown-300 text-cream-200 font-semibold text-base rounded-lg hover:bg-brown-200 transition-colors"
            >
              Apply for funding
            </a>
          </div>
        </div>
      </section>

      {/* Real Economy Narrative */}
      <section className="bg-cream-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug max-w-3xl">
            Small businesses power local economies.
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-2xl">
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
                className="text-lg md:text-xl font-medium text-brown-200"
              >
                {industry}
              </p>
            ))}
          </div>
          <p className="mt-16 text-xl md:text-2xl text-brown-300 leading-relaxed max-w-3xl">
            These businesses employ millions of people and anchor communities
            across the country.
          </p>

          <div className="mt-20 border-t border-brown-100/30 pt-16">
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug max-w-3xl">
              But local ownership is shrinking.
            </p>
            <p className="mt-8 text-lg md:text-xl text-brown-200 leading-relaxed max-w-3xl">
              Small businesses face increasing pressure from national chains,
              private equity consolidation, and technology that was never
              designed for how these companies actually operate.
            </p>
            <p className="mt-8 text-lg md:text-xl text-brown-300 leading-relaxed max-w-3xl font-medium">
              We believe better technology can help small businesses stay local,
              scale more efficiently, and compete without losing what makes them
              valuable.
            </p>
            <p className="mt-8 text-xl md:text-2xl font-semibold text-brown-300 max-w-3xl">
              Technology should strengthen local ownership, not replace it.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Shift */}
      <section className="bg-cream-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug max-w-3xl">
            For decades building powerful software required large teams and
            enormous capital.
          </p>
          <p className="mt-8 text-2xl md:text-3xl font-bold text-teal-dark max-w-3xl">
            Today that is no longer true.
          </p>
          <p className="mt-8 text-lg md:text-xl text-brown-200 leading-relaxed max-w-3xl">
            Cloud infrastructure, modern development tools, and artificial
            intelligence allow small teams to build powerful technology faster
            than ever before.
          </p>
          <p className="mt-6 text-lg md:text-xl text-brown-300 leading-relaxed max-w-3xl font-medium">
            This enables a new generation of companies serving small businesses.
          </p>
        </div>
      </section>

      {/* Industry Insider Founders */}
      <section className="bg-brown-300 text-cream-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug max-w-3xl">
            The best founders building these companies will come from inside the
            industries they serve.
          </p>
          <p className="mt-8 text-lg md:text-xl text-brown-100 leading-relaxed max-w-3xl">
            Operators who understand the real problems.
          </p>
          <p className="mt-6 text-lg md:text-xl text-brown-100 leading-relaxed max-w-3xl">
            People who have run restaurants, construction companies, logistics
            businesses, and service organizations.
          </p>
          <p className="mt-8 text-xl md:text-2xl font-semibold text-cream-200 max-w-3xl">
            These are the founders Fireroad backs.
          </p>
        </div>
      </section>

      {/* What Fireroad Does */}
      <section className="bg-cream-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug max-w-3xl">
            Fireroad backs founders building technology for small businesses.
          </p>
          <p className="mt-8 text-lg md:text-xl text-brown-200 leading-relaxed max-w-3xl">
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
                className="text-lg md:text-xl text-brown-300 font-medium flex items-start gap-3"
              >
                <span className="text-teal-dark mt-1.5 text-sm">&#9632;</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-12 text-xl md:text-2xl font-bold text-brown-300 max-w-3xl">
            Technology for the backbone of the economy.
          </p>
        </div>
      </section>

      {/* Venture Evolution */}
      <section className="bg-cream-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug max-w-3xl">
            Venture building has evolved.
          </p>
          <p className="mt-8 text-lg md:text-xl text-brown-200 leading-relaxed max-w-3xl">
            Technology makes it possible to build capital-efficient businesses
            with small teams.
          </p>
          <p className="mt-6 text-lg md:text-xl text-brown-300 leading-relaxed max-w-3xl font-medium">
            Fireroad invests using structures that align with the kind of
            businesses founders are building.
          </p>
          <p className="mt-6 text-lg md:text-xl text-brown-200 leading-relaxed max-w-3xl">
            Because not every great company needs to follow the same playbook.
          </p>
        </div>
      </section>

      {/* Selected Portfolio */}
      <section className="bg-cream-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
            {selectedPortfolio.map((company) => (
              <a
                key={company.name}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cream-100 rounded-xl p-6 md:p-8 flex flex-col items-center justify-center gap-4 hover:shadow-lg transition-shadow min-h-[120px]"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={40}
                  height={40}
                  className="h-8 w-8 opacity-60"
                />
                <p className="text-sm md:text-base font-semibold text-brown-300 text-center">
                  {company.name}
                </p>
              </a>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center px-8 py-4 border-2 border-brown-300 text-brown-300 font-semibold text-base rounded-lg hover:bg-brown-300 hover:text-cream-200 transition-colors"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Fireroad Platform */}
      <section className="bg-cream-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="border-t-4 border-teal-dark pt-8">
              <h3 className="text-xl md:text-2xl font-bold text-brown-300">
                Fireroad Ventures
              </h3>
              <p className="mt-4 text-brown-200 leading-relaxed">
                Investing in founders building technology for small businesses.
              </p>
            </div>
            <div className="border-t-4 border-green-dark pt-8">
              <h3 className="text-xl md:text-2xl font-bold text-brown-300">
                Fireroad HoldCo
              </h3>
              <p className="mt-4 text-brown-200 leading-relaxed">
                Partnering with owners to grow enduring service companies.
              </p>
            </div>
            <div className="border-t-4 border-orange-dark pt-8">
              <h3 className="text-xl md:text-2xl font-bold text-brown-300">
                Fireroad Foundry
              </h3>
              <p className="mt-4 text-brown-200 leading-relaxed">
                Developing technology to modernize operations across the
                platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brown-300 text-cream-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32 text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto">
            The backbone of the economy deserves better technology.
          </h2>
          <div className="mt-10">
            <a
              href="https://www.fireroad.vc/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-cream-200 text-brown-300 font-semibold text-base rounded-lg hover:bg-cream-100 transition-colors"
            >
              Apply for funding
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
