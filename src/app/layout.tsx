import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Fireroad — Technology for the Backbone of the Economy",
    template: "%s | Fireroad",
  },
  description:
    "Fireroad backs founders building technology for small businesses. We invest in technology that helps small businesses stay local, scale efficiently, and compete in the AI economy.",
  openGraph: {
    title: "Fireroad — Technology for the Backbone of the Economy",
    description:
      "Fireroad backs founders building technology for small businesses.",
    url: "https://fireroad.io",
    siteName: "Fireroad",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
