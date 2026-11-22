"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { TRANSLATIONS, type Language, type Translation } from "./content";

interface LanguageValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageValue>({
  language: "en",
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: TRANSLATIONS.en,
});

const langFromPath = (): Language => (window.location.pathname.startsWith("/m") ? "mai" : "en");

/** English lives at "/", Maithili at "/m". Switching updates the URL without reloading. */
export function LanguageProvider({ children, initialLanguage }: { children: ReactNode; initialLanguage: Language }) {
  const [chosen, setChosen] = useState<Language | null>(null);
  const language = chosen ?? initialLanguage;

  useEffect(() => {
    const onPop = () => setChosen(langFromPath());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const setLanguage = (lang: Language) => {
    setChosen(lang);
    try {
      localStorage.setItem("wedding_lang", lang);
    } catch {}
    const path = window.location.pathname;
    const keep = window.location.search + window.location.hash;
    if (lang === "mai" && !path.startsWith("/m")) window.history.pushState(null, "", "/m" + keep);
    else if (lang === "en" && path.startsWith("/m")) window.history.pushState(null, "", "/" + keep);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage: () => setLanguage(language === "en" ? "mai" : "en"),
        t: TRANSLATIONS[language] as Translation,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
