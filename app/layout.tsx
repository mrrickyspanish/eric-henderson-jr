import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-dm-sans",
});

const geistDisplay = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-barlow-condensed",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Eric Henderson Jr. | Athlete Authority Hub",
  description:
    "Official recruiting and authority hub for Eric Henderson Jr. (RB/MLB), Chicago Bulls College Prep, Class of 2028.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistDisplay.variable} ${geistMono.variable} bg-midnight text-ivory antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
