'use client';
import { inViewContext } from '@/src/app/[locale]/providers';
import { useInView } from 'framer-motion';
import React, { useEffect } from 'react';

export default function AboutSection() {
  const { setInView } = React.useContext(inViewContext);

  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log(isInView);
    
    if (isInView) {
      setInView('about');
    }
  }, [isInView]);

  return (
    <div
      className="flex h-screen w-full items-center justify-center gap-32 bg-foreground-100"
      id="about"
    >
      <h2 ref={ref}>aa</h2>
    </div>
  );
}
