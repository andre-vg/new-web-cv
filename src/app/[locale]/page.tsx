import AboutSection from '@/src/components/About/aboutSection';
import HeroSection from '@/src/components/Hero/heroSection';
import ProjectSection from '@/src/components/Projects/projectSection';
import { NextIntlClientProvider, useLocale, useMessages } from 'next-intl';

export default function Home() {
  const messages = useMessages();
  const locale = useLocale();
  return (
    <>
      <HeroSection />
      <NextIntlClientProvider messages={messages} locale={locale}>
        <AboutSection />
        <ProjectSection />
      </NextIntlClientProvider>
    </>
  );
}
