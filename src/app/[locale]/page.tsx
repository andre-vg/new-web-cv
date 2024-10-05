import AboutSection from '@/src/components/About/aboutSection';
import HeroSection from '@/src/components/Hero/heroSection';
import { NextIntlClientProvider, useLocale, useMessages } from 'next-intl';

export default function Home() {
  const messages = useMessages();
  const locale = useLocale();
  return (
    <section className="flex flex-col items-center justify-center">
      <HeroSection />
      <NextIntlClientProvider messages={messages} locale={locale}>
        <AboutSection />
      </NextIntlClientProvider>
    </section>
  );
}
