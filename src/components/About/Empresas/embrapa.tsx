import { School } from 'lucide-react';
import { useMessages } from 'next-intl';
import React from 'react';
import { subtitle, text, title } from '../../primitives';
import { Chip } from '@nextui-org/chip';

export default function Embrapa() {
  //@ts-ignore
  const messages: IntlMessages = useMessages();

  const Arr = Array.from(
    { length: Object.keys(messages.about.embrapa.comp).length },
    (_, i) => i + 1,
  );

  return (
    <li>
      <hr />
      <div className="timeline-middle">
        <School />
      </div>
      <div className="timeline-end mb-10">
        <time className={subtitle()}>2020</time>
        <div className={title({ size: 'sm' })}>
          {messages.about.embrapa.title}
        </div>
        <p className={text()}>{messages.about.embrapa.text}</p>
        <div className="flex flex-wrap gap-2">
          {Arr.map((i) => (
            <Chip
              key={i}
              variant="solid"
              size="lg"
              classNames={{
                content: 'font-semibold',
              }}
              color="primary"
            >
              {/* @ts-ignore */}
              {messages.about.embrapa.comp[i]}
            </Chip>
          ))}
        </div>
      </div>
      <hr />
    </li>
  );
}
