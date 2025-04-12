//src/context/languageContext.tsx
'use client';
import { createContext, useContext, useState } from 'react';
import en from '../../messages/en.json';
import es from '../../messages/es.json';

const translations: Record<string, any> = { en, es };

type LanguageContextType = {
  locale: string;
  setLocale: (lang: 'en' | 'es') => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<'en' | 'es'>('en');

  const t = (key: string): string => {
    const keys = key.split('.');
    let result = translations[locale];
    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) return key;
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
};
