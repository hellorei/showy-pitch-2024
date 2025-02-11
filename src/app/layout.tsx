import clsx from "clsx";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Analytics from "./analytics";
import { narrow } from "./fonts";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Showy Pitch Deck",
  description: "Private pitch deck for Showy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          geistSans.variable,
          geistMono.variable,
          narrow.variable,
          "antialiased",
          "dark bg-black dark:bg-black"
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
