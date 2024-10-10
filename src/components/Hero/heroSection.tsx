import { Image } from '@nextui-org/image';
import { useTranslations } from 'next-intl';
import React from 'react';
import Typer from './typer';
import { Button } from '@nextui-org/button';
import { Download, Github, LucideLinkedin } from 'lucide-react';

export default function HeroSection() {
  const t = useTranslations('hero');
  const adj = [t('adj.1'), t('adj.2'), t('adj.3'), t('adj.4'), t('adj.5')];

  return (
    <div className="flex h-screen items-center justify-center gap-32" id="hero">
      <div className="prose dark:prose-invert lg:prose-2xl prose-headings:m-0 prose-p:m-0">
        <h3>{t('greeting')}</h3>
        <h1>André Gonçalves</h1>
        <div className="flex gap-1">
          <p>{t('is')}</p>
          <Typer adj={adj} />
        </div>
        <div className="flex gap-4">
          <Button
            variant="solid"
            color="primary"
            size="lg"
            startContent={<LucideLinkedin strokeWidth={1.5} />}
            className="font-semibold decoration-transparent"
            href="https://www.linkedin.com/in/andr%C3%A9-gon%C3%A7alves-a74535163/"
            target="_blank"
          >
            LinkedIn
          </Button>
          <Button
            as={"a"}
            href="https://github.com/andre-vg"
            target="_blank"
            variant="ghost"
            color="primary"
            size="lg"
            startContent={<Github strokeWidth={2} />}
            className="font-semibold decoration-transparent"
          >
            GitHub
          </Button>
          <Button
            href="https://docs.google.com/document/u/0/export?format=pdf&id=1pP1_QE7tRpY6MThaB_Afm_kAleM2lQns&token=AC4w5Vjqjo7JN-rb-gAASZVseUHH2bWBCA%3A1728148675627&includes_info_params=true&usp=docs_home&cros_files=false&inspectorResult=%7B%22pc%22%3A2%2C%22lplc%22%3A28%7D"
            target="_blank"
            variant="ghost"
            color="primary"
            size="lg"
            startContent={<Download strokeWidth={2} />}
            className="font-semibold decoration-transparent"
          >
            Download CV
          </Button>
        </div>
      </div>
      <Image
        src="https://placehold.co/400x400.png"
        alt="André Gonçalves"
        classNames={{
          img: 'rounded-full aspect-square object-cover hidden md:block max-h-1/4 max-w-1/4',
        }}
        removeWrapper
      />
    </div>
  );
}
