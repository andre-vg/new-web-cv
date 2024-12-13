import { School } from 'lucide-react';
import { useMessages } from 'next-intl';
import React from 'react';
import { subtitle, text, title } from '../../primitives';
import { Chip } from '@nextui-org/chip';

export default function Icts() {
  //@ts-ignore
  const messages: IntlMessages = useMessages();

  const Arr = Array.from(
    { length: Object.keys(messages.about.icts.comp).length },
    (_, i) => i + 1,
  );

  return (
    <li>
      <hr />
      <div className="timeline-middle">
        <School />
      </div>
      <div className="timeline-start mb-10 md:text-end">
        <time className={subtitle()}>1998</time>
        <div className={title({ size: 'sm' })}>{messages.about.icts.title}</div>
        <p className={text()}>
          {messages.about.icts.text}
        </p>
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
              {messages.about.icts.comp[i]}
            </Chip>
          ))}
        </div>
      </div>
      <hr />
    </li>
  );
}
