import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Building technology for small businesses? Apply for funding from Fireroad or get in touch.",
};

export default function ContactPage() {
  return (
    <section className="bg-cream-100 min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-3xl">
          Building technology for small businesses?
        </h1>

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

        <div className="mt-16 border-t border-brown-100/30 pt-12">
          <p className="text-brown-200 text-lg">
            For general inquiries, reach us at{" "}
            <a
              href="mailto:hello@fireroad.io"
              className="text-brown-300 font-medium hover:text-teal-dark transition-colors underline underline-offset-4"
            >
              hello@fireroad.io
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
