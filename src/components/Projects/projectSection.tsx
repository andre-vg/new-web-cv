'use client';
import React, { useContext, useEffect, useRef } from 'react';
import { BentoGrid } from './bentoGrid';
import { inViewContext } from '@/src/app/[locale]/providers';
import { useInView } from 'framer-motion';
import { useMessages } from 'next-intl';
export default function ProjectSection() {
  const { setInView } = useContext(inViewContext);

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  //@ts-ignore
  const messages: IntlMessages = useMessages();

  useEffect(() => {
    if (isInView) {
      setInView('projects');
    }
  }, [isInView]);
  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-background py-32">
      <div
        className="prose items-center justify-center gap-32 text-center dark:prose-invert lg:prose-2xl prose-headings:m-0 prose-p:m-0"
        id="projects"
        ref={ref}
      >
        <h2>{messages.projetosPage.title}</h2>
        <p>{messages.projetosPage.subtitle}</p>
        <BentoGrid />
      </div>
    </section>
  );
}
