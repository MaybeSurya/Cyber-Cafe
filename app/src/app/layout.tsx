import type { Metadata } from "next";
import { Archivo_Narrow, Arimo, Courier_Prime, Vollkorn } from "next/font/google";
import "./globals.css";

const archivoNarrow = Archivo_Narrow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-archivo-narrow",
  display: "swap",
});

const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-arimo",
  display: "swap",
});

const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-courier-prime",
  display: "swap",
});

const vollkorn = Vollkorn({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-vollkorn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NET JUNCTION — Indian Cyber Café Experience",
  description:
    "Step inside a nostalgic Indian neighborhood cyber café inspired by the internet culture, gaming cafés, printing shops and computer culture of the mid-2010s.",
  keywords: [
    "Indian cyber cafe",
    "cyber cafe nostalgia",
    "Indian internet culture",
    "2010s India",
    "LAN gaming",
    "retro internet India",
  ],
  openGraph: {
    title: "NET JUNCTION — Indian Cyber Café Experience",
    description:
      "An immersive nostalgic recreation of an Indian neighborhood cyber café from 2014–2019.",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={[
        archivoNarrow.variable,
        arimo.variable,
        courierPrime.variable,
        vollkorn.variable,
      ].join(" ")}
    >
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
