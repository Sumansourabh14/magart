import { SITE_METADATA } from "@/utils/constants";
import {
  abrilFatface,
  anton,
  bebasNeue,
  bodoniModa,
  greatVibes,
  leagueSpartan,
  playfairDisplay,
  robotoCondensed,
  rockSalt,
} from "@/utils/fonts";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bodoniModa.variable} ${playfairDisplay.variable} ${anton.variable} ${bebasNeue.variable} ${robotoCondensed.variable} ${greatVibes.variable} ${abrilFatface.variable} ${leagueSpartan.variable} ${rockSalt.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
