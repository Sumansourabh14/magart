// fonts.ts
import {
  Anton,
  Bebas_Neue,
  Bodoni_Moda,
  Playfair_Display,
  Roboto_Condensed,
  Great_Vibes,
  Abril_Fatface,
  League_Spartan,
  Rock_Salt,
} from "next/font/google";

export const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-bodoni",
});

export const rockSalt = Rock_Salt({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-bodoni",
});

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-playfair",
});

export const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-anton",
});

export const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-bebas",
});

export const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-roboto-condensed",
});

export const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-great-vibes",
});

export const abrilFatface = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-abril-fatface",
});

export const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-league-spartan",
});
