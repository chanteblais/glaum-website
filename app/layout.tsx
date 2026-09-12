import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import localFont from "next/font/local";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre-baskerville",
});

const tokyoDreams = localFont({
  src: "../public/fonts/TokyoDreams.otf",
  variable: "--font-tokyo-dreams",
});

const tokyoDreamsPlain = localFont({
  src: "../public/fonts/TokyoDreamsPlain.otf",
  variable: "--font-tokyo-dreams-plain",
});

export const metadata: Metadata = {
  title: "Glåüm — More Than Love.",
  description:
    "Glåüm is the state of perfect attunement between self and all. A community of compassion, community, and playfulness.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${libreBaskerville.variable} ${tokyoDreams.variable} ${tokyoDreamsPlain.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
