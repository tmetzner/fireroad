import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Fireroad backs founders building technology for the backbone of the economy. Learn about our mission and team.",
};

export default function AboutPage() {
  return (
    <>
      {/* Mission */}
      <section className="bg-cream-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-4xl">
            Fireroad backs founders building technology for the backbone of the
            economy.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-brown-200 leading-relaxed max-w-3xl">
            We believe the businesses that power everyday life deserve
            world-class technology.
          </p>
          <p className="mt-6 text-lg md:text-xl text-brown-300 leading-relaxed max-w-3xl font-medium">
            Our mission is to build, buy, and back companies that strengthen the
            real economy while creating meaningful long-term returns.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="bg-cream-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <h2 className="text-2xl md:text-3xl font-bold mb-16">Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-brown-300">
                Tim Metzner
              </h3>
              <p className="text-teal-dark font-medium mt-1">
                Founder and CEO
              </p>
              <p className="mt-4 text-brown-200 leading-relaxed">
                Tim has founded and invested in companies across venture capital
                and technology and has invested in more than fifty startups.
              </p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-brown-300">
                Christy Johnson
              </h3>
              <p className="text-teal-dark font-medium mt-1">
                General Partner, Fireroad Ventures
              </p>
              <p className="mt-4 text-brown-200 leading-relaxed">
                Christy works closely with founders building technology for
                small businesses and brings deep operational experience
                supporting entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Link to Manifesto */}
      <section className="bg-brown-300 text-cream-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32 text-center">
          <h2 className="text-2xl md:text-4xl font-bold max-w-2xl mx-auto">
            Read the Fireroad Manifesto
          </h2>
          <div className="mt-8">
            <Link
              href="/manifesto"
              className="inline-flex items-center px-8 py-4 bg-cream-200 text-brown-300 font-semibold text-base rounded-lg hover:bg-cream-100 transition-colors"
            >
              Read Manifesto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
