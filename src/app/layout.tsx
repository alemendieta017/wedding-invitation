import type { Metadata } from "next";
import { Great_Vibes } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

const montserratArabic = localFont({
  src: "../../public/fonts/Montserrat-Arabic-Regular.ttf",
  variable: "--font-montserrat-arabic",
});

const leJourSerif = localFont({
  src: "../../public/fonts/Le Jour Serif.otf",
  variable: "--font-le-jour-serif",
});

export const metadata: Metadata = {
  title: "Jessica & Alejandro - Boda",
  description: "Página web de la boda de Jessica y Alejandro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${greatVibes.variable} ${montserratArabic.variable} ${leJourSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
