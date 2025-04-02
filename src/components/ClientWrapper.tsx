'use client';

import { useEffect, useState } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { LanguageProvider, useLanguage } from '@/context/LanguageContext';

function IntlWrapper({ children }: { children: React.ReactNode }) {
  const { locale } = useLanguage();
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    import(`../../messages/${locale}.json`).then((mod) => {
      setMessages(mod.default);
    });
  }, [locale]);

  if (!messages) return <p className="text-center pt-10">Loading...</p>;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <IntlWrapper>{children}</IntlWrapper>
    </LanguageProvider>
  );
}
