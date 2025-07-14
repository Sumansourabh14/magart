import { Bodoni_Moda, Rock_Salt } from "next/font/google";

export const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-bodoni",
});

export const rockSalt = Rock_Salt({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-rocksalt",
});
