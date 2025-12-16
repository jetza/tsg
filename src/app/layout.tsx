import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { LocaleProvider } from "@/contexts/LocaleContext";

// Montserrat - za naslove i navigaciju
const montserrat = localFont({
  src: [
    {
      path: "../../public/fonts/Montserrat-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Montserrat-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Montserrat-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Montserrat-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-montserrat",
  display: "swap",
});

// Hanken Grotesk - za body tekst
const hankenGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/HankenGrotesk-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/HankenGrotesk-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/HankenGrotesk-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/HankenGrotesk-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/HankenGrotesk-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TSG - Tehnika Saobraćaja Grupa",
  description:
    "Stručni konsultanti za saobraćaj - ekspertize, edukacija, projekti iz oblasti bezbednosti saobraćaja",
  keywords: [
    "saobraćaj",
    "bezbednost",
    "ekspertize",
    "edukacija",
    "TSG",
    "Srbija",
  ],
  authors: [{ name: "TSG Serbia" }],
  openGraph: {
    title: "TSG - Tehnika Saobraćaja Grupa",
    description: "Stručni konsultanti za saobraćaj",
    type: "website",
    locale: "sr_RS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className={`${montserrat.variable} ${hankenGrotesk.variable} font-sans antialiased`}
      >
        <LocaleProvider>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 ml-0 md:ml-64 transition-all duration-300">
              {children}
            </main>
          </div>
        </LocaleProvider>
      </body>
    </html>
  );
}
