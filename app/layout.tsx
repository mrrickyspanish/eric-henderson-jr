import Header from '@/components/layout/Header';
import "./globals.css";
import type { Metadata } from "next";
import { Suspense } from "react";
import { SportProvider } from "@/components/sport/SportContext";
import { SITE_NAME, SITE_URL } from "@/lib/siteConfig";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: SITE_NAME,
  description:
    "Class of 2028 dual-sport athlete LaMarin Powell — verified film, stats, schedule, and recruiting contact for college coaches.",
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/lamarin_powell_logo_main_black.png",
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: SITE_NAME,
    description:
      "Class of 2028 dual-sport athlete LaMarin Powell — verified film, stats, schedule, and recruiting contact for college coaches.",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/lp_hero_football.png",
        width: 1200,
        height: 630,
        alt: "LaMarin Powell – Football and Basketball recruiting profile",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "Official recruiting profile for dual-sport athlete LaMarin Powell.",
    images: ["/lp_hero_football.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/iqh7sda.css" />
      </head>
      <body className="bg-slate-950 text-white">
        <Suspense fallback={<div className="min-h-screen bg-slate-950" />}>
          <SportProvider>
            <Header />
            {children}
          </SportProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
