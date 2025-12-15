"use client";

import { useState } from "react";
import srLocale from "@/locales/sr.json";
import enLocale from "@/locales/en.json";

type Locale = "sr" | "en";

const locales = {
  sr: srLocale,
  en: enLocale,
};

export function useLocale() {
  const [locale, setLocale] = useState<Locale>("sr");

  const t = locales[locale];

  const switchLocale = () => {
    setLocale(locale === "sr" ? "en" : "sr");
  };

  return { t, locale, switchLocale };
}
