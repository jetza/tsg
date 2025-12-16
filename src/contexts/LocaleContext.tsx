"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import srLocale from "@/locales/sr.json";
import enLocale from "@/locales/en.json";

type Locale = "sr" | "en";

const locales = {
  sr: srLocale,
  en: enLocale,
};

interface LocaleContextType {
  locale: Locale;
  t: typeof srLocale;
  switchLocale: () => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  // Initialize locale from localStorage or default to "sr"
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window !== "undefined") {
      const savedLocale = localStorage.getItem("locale") as Locale;
      if (savedLocale && (savedLocale === "sr" || savedLocale === "en")) {
        return savedLocale;
      }
    }
    return "sr";
  });

  // Save locale to localStorage when it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", locale);
    }
  }, [locale]);

  const switchLocale = () => {
    setLocale((prev) => (prev === "sr" ? "en" : "sr"));
  };

  const t = locales[locale];

  return (
    <LocaleContext.Provider value={{ locale, t, switchLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}
