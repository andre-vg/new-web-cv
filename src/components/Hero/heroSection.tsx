import { Image } from '@nextui-org/image';
import { useTranslations } from 'next-intl';
import React from 'react';
import Typer from './typer';

export default function HeroSection() {
  const t = useTranslations('hero');
  const adj = [t('adj.1'), t('adj.2'), t('adj.3'), t('adj.4'), t('adj.5')];
  
  return (
    <div className="flex h-screen items-center justify-center gap-32" id="hero">
      <div className="prose lg:prose-2xl dark:prose-invert prose-headings:m-0 prose-p:m-0">
        <h3>{t('greeting')}</h3>
        <h1>André Gonçalves</h1>
        <div className="flex gap-1">
          <p>{t('is')}</p>
          <Typer adj={adj} />
        </div>
      </div>
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGaMxXLcmev_hEziG5SjYZOdzS04JMw7m_Dw&s"
        alt="André Gonçalves"
        classNames={{
          img: 'rounded-full aspect-square object-cover hidden md:block',
        }}
        removeWrapper
      />
    </div>
  );
}
