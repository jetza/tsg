"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  ReactNode,
  startTransition,
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
  // Initialize locale to default "sr" to match server-side rendering
  const [locale, setLocale] = useState<Locale>("sr");
  const isHydratedRef = useRef(false);

  // Load locale from localStorage after hydration
  useEffect(() => {
    if (typeof window !== "undefined" && !isHydratedRef.current) {
      const savedLocale = localStorage.getItem("locale") as Locale;
      if (savedLocale && (savedLocale === "sr" || savedLocale === "en")) {
        startTransition(() => {
          setLocale(savedLocale);
        });
      }
      isHydratedRef.current = true;
    }
  }, []);

  // Save locale to localStorage when it changes (only after hydration)
  useEffect(() => {
    if (isHydratedRef.current && typeof window !== "undefined") {
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
