import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Fireroad Manifesto",
  description:
    "Small businesses are the backbone of America. They build communities, create meaningful work, and provide the services people rely on every day.",
};

export default function ManifestoPage() {
  return (
    <section className="bg-cream-100">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
          The Fireroad Manifesto
        </h1>

        <div className="mt-16 space-y-8 text-lg md:text-xl leading-relaxed text-brown-300">
          <p className="text-2xl md:text-3xl font-semibold">
            Small businesses are the backbone of America.
          </p>

          <div className="space-y-2">
            <p>They build communities.</p>
            <p>They create meaningful work.</p>
            <p>They provide the services people rely on every day.</p>
          </div>

          <div className="space-y-2 text-brown-200 font-medium">
            <p>Contractors.</p>
            <p>Manufacturers.</p>
            <p>Restaurants.</p>
            <p>Healthcare practices.</p>
            <p>Logistics companies.</p>
            <p>Trades.</p>
          </div>

          <p>
            These businesses employ millions of people and anchor local
            economies.
          </p>

          <p className="text-brown-200">
            But for decades the technology built for them has lagged behind.
          </p>

          <p>
            Most software has been designed for large enterprises or
            venture-backed technology companies, not the businesses that power
            everyday life.
          </p>

          <p className="text-2xl md:text-3xl font-semibold pt-8">
            We believe that is about to change.
          </p>

          <div className="border-t border-brown-100/30 pt-12 space-y-6">
            <p>Local businesses do more than provide services.</p>

            <div className="space-y-2">
              <p>They build wealth in communities.</p>
              <p>They create stable employment.</p>
              <p>They support families and neighborhoods.</p>
            </div>

            <p className="text-2xl md:text-3xl font-semibold pt-4">
              But local ownership is shrinking.
            </p>

            <p className="text-brown-200">
              Small businesses face pressure from national chains, private
              equity consolidation, and technology that was never designed for
              how these companies actually operate.
            </p>

            <p className="font-medium">
              We believe better technology can help small businesses stay local,
              scale more efficiently, and compete without losing what makes them
              valuable.
            </p>

            <p className="text-xl md:text-2xl font-semibold">
              Technology should strengthen local ownership, not replace it.
            </p>
          </div>

          <div className="border-t border-brown-100/30 pt-12 space-y-6">
            <p>
              Small businesses represent one of the largest and most underserved
              markets in the world.
            </p>

            <p>
              Artificial intelligence and modern software tools now make it
              possible to build powerful technology faster than ever before.
            </p>

            <p>
              Founders who deeply understand their industries can now build
              technology that helps small businesses operate more efficiently and
              compete with companies many times their size.
            </p>

            <p className="font-medium">
              These companies will define the next generation of software.
            </p>
          </div>

          <div className="border-t border-brown-100/30 pt-12 space-y-6">
            <p>
              At Fireroad we believe entrepreneurship can create meaningful
              impact beyond financial returns.
            </p>

            <div className="space-y-2">
              <p>Great companies create great jobs.</p>
              <p>Strong jobs strengthen families.</p>
              <p>Strong families strengthen communities.</p>
            </div>

            <p className="text-2xl md:text-3xl font-semibold pt-4">
              Fireroad exists to build, buy, and back companies that strengthen
              the real economy.
            </p>

            <p>
              We partner with founders building technology for small businesses.
            </p>

            <p className="font-medium">
              And we believe the businesses that power everyday life deserve
              world-class technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
