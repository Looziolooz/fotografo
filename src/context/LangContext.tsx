"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { DICT, type Lang, type I18nDict } from "@/lib/i18n";

type LangContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: I18nDict;
};

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("it");
  const t = DICT[lang];

  return (
    <LangContext.Provider value={{ lang, setLang: useCallback(setLang, []), t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
