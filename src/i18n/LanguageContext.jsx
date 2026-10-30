import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "./translations.js";

const LanguageContext = createContext(null);
const STORAGE_KEY = "puhaskodu-lang";
const DEFAULT_LANG = "ru";
const SUPPORTED = new Set(["ru", "et", "en"]);

function getInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED.has(saved)) return saved;
  } catch {
    /* ignore */
  }
  return DEFAULT_LANG;
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang);

  const setLang = (next) => {
    const safe = SUPPORTED.has(next) ? next : DEFAULT_LANG;
    setLangState(safe);
    try {
      localStorage.setItem(STORAGE_KEY, safe);
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: translations[lang] || translations[DEFAULT_LANG],
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
