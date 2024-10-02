'use client';
import React, { useEffect } from 'react';
import { TextEffect } from '../core/text-effect';
import { useInView } from 'framer-motion';
import { inViewContext } from '@/src/app/[locale]/providers';

export default function Typer({ adj }: { adj: string[] }) {
  const [currentAdj, setCurrentAdj] = React.useState(adj[0]);
  const { setInView } = React.useContext(inViewContext);
  let index = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      //sequence of adjectives
      const randomAdj = adj[index];
      index = (index + 1) % adj.length;
      setCurrentAdj(randomAdj);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setInView('hero');
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <TextEffect per="word" preset="blur">
        {currentAdj}
      </TextEffect>
    </div>
  );
}
