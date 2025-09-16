import type { Metadata } from "next";
import { Gwendolyn, Great_Vibes, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const gwendolyn = Gwendolyn({
  variable: "--font-gwendolyn",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const leJourSerif = localFont({
  src: "../../public/fonts/Le Jour Serif.otf",
  variable: "--font-le-jour-serif",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jesse & Ale 💍",
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
        className={`${gwendolyn.variable} ${greatVibes.variable} ${montserrat.variable} ${leJourSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
