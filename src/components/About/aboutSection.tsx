'use client';
import OrbitingCircles from '@/components/ui/orbiting-circles';
import { inViewContext } from '@/src/app/[locale]/providers';
import { useInView } from 'framer-motion';
import React, { useEffect } from 'react';
import { GithubIcon } from '../icons';
import { useMessages } from 'next-intl';

export default function AboutSection() {
  const { setInView } = React.useContext(inViewContext);

  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setInView('about');
    }
  }, [isInView]);

  //@ts-ignore
  const messages: IntlMessages = useMessages();

  return (
    <section className="flex h-screen w-full items-center justify-center bg-foreground-100">
      <div
        className="prose items-center justify-center gap-32 text-center dark:prose-invert lg:prose-2xl prose-headings:m-0 prose-p:m-0"
        id="about"
      >
        <h2 ref={ref}>{messages.about.title}</h2>
        <p>{messages.about.subtitle}</p>
        {/* <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Circles
        </span>
        <OrbitingCircles
        radius={80}
        className="size-[30px] border-none bg-transparent"
        >
        <GithubIcon />
        </OrbitingCircles>
        </div> */}
      </div>
    </section>
  );
}
