import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brown-300 text-cream-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-2">
            <Image
              src="/brand-assets/logos/logo_light.png"
              alt="Fireroad"
              width={200}
              height={60}
              className="h-9 w-auto mb-6"
            />
            <p className="text-brown-100 text-sm leading-relaxed max-w-md">
              Technology for the backbone of the economy.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase mb-4 text-cream-300">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-brown-100 hover:text-cream-200 transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/manifesto"
                  className="text-brown-100 hover:text-cream-200 transition-colors text-sm"
                >
                  Manifesto
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-brown-100 hover:text-cream-200 transition-colors text-sm"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-brown-100 hover:text-cream-200 transition-colors text-sm"
                >
                  News
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide uppercase mb-4 text-cream-300">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-brown-100 hover:text-cream-200 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://www.fireroad.vc/apply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brown-100 hover:text-cream-200 transition-colors text-sm"
                >
                  Apply for Funding
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@fireroad.io"
                  className="text-brown-100 hover:text-cream-200 transition-colors text-sm"
                >
                  hello@fireroad.io
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brown-200/30 mt-12 pt-8">
          <p className="text-brown-100 text-xs">
            &copy; {new Date().getFullYear()} Fireroad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
