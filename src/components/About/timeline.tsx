import React from 'react';
import Embrapa from './Empresas/embrapa';
import Ceub from './Empresas/ceub';
import Icts from './Empresas/icts';
import Rybena from './Empresas/rybena';

export default function Timeline() {
  return (
    <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
      <Ceub />
      <Embrapa />
      <Icts />
      <Rybena />
    </ul>
  );
}
