import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
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
  metadataBase: new URL("https://tsgserbia.rs"),
  title: {
    default: "TSG - Tehnika Saobraćaja Grupa",
    template: "%s | TSG Serbia",
  },
  description:
    "Stručni konsultanti za saobraćaj - ekspertize, edukacija, projekti iz oblasti bezbednosti saobraćaja",
  keywords: [
    "saobraćaj",
    "bezbednost saobraćaja",
    "saobraćajne ekspertize",
    "edukacija vozača",
    "PC-Crash",
    "analiza saobraćajnih nezgoda",
    "simpozijumi",
    "zakoni o saobraćaju",
    "TSG Serbia",
    "Srbija",
  ],
  authors: [{ name: "TSG Serbia" }],
  creator: "TSG Serbia",
  publisher: "TSG Serbia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: "https://tsgserbia.rs",
    siteName: "TSG Serbia",
    title: "TSG - Tehnika Saobraćaja Grupa",
    description:
      "Stručni konsultanti za saobraćaj - ekspertize, edukacija, projekti",
    images: [
      {
        url: "/logo/tsg-logo.png",
        width: 1200,
        height: 630,
        alt: "TSG Serbia Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TSG - Tehnika Saobraćaja Grupa",
    description:
      "Stručni konsultanti za saobraćaj - ekspertize, edukacija, projekti",
  },
  alternates: {
    canonical: "https://tsgserbia.rs",
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
            <Header />
            <main className="flex-1 ml-0 md:ml-80 transition-all duration-300">
              {children}
            </main>
          </div>
        </LocaleProvider>
      </body>
    </html>
  );
}
