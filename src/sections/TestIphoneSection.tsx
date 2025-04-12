'use client';

import { useLanguage } from '@/context/LanguageContext';

export const TestIphoneSection = () => {
  const { locale } = useLanguage();

  return (
    <div id="test-iphone" className="py-32 text-center bg-black text-white text-4xl font-bold relative">
      Hello iPhone ✅

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-green-400 px-3 py-1 rounded text-sm z-[9999]">
        TestIphone loaded — Locale: {locale}
      </div>
    </div>
  );
};
