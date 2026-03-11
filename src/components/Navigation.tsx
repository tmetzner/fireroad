"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream-100/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link href="/" className="flex-shrink-0" aria-label="Fireroad home">
            <Image
              src="/brand-assets/logos/logo_dark.png"
              alt="Fireroad"
              width={280}
              height={80}
              className="h-14 md:h-16 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-brown-300 hover:text-brown-200 transition-colors text-sm font-medium tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.fireroad.vc/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold tracking-wide text-brown-300 hover:text-brown-200 transition-colors ml-2"
            >
              Apply
            </a>
          </div>

          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`block h-0.5 w-6 bg-brown-300 transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-brown-300 transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-brown-300 transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Thin divider */}
      <div className="h-px bg-cream-300/60" />

      {isOpen && (
        <div className="md:hidden bg-cream-100 border-t border-cream-300/50">
          <div className="px-6 py-6 space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-lg text-brown-300 hover:text-brown-200 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.fireroad.vc/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg text-brown-300 hover:text-brown-200 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Apply
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
