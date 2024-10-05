import { useTranslations } from 'next-intl';
import React from 'react';
import { BentoGrid } from './bentoGrid';
export default function ProjectSection() {
  const t = useTranslations('projetosPage');
  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-background">
      <div className="prose items-center justify-center gap-32 text-center dark:prose-invert lg:prose-2xl prose-headings:m-0 prose-p:m-0">
        <h2>{t('title')}</h2>
        <p>{t('subtitle')}</p>
        <BentoGrid />
      </div>
    </section>
  );
}
