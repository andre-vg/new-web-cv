import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('about');
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      {t('education.text.2')}
    </section>
  );
}
