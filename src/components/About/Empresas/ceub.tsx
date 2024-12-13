import { School } from 'lucide-react';
import { useMessages } from 'next-intl';
import React from 'react';
import { subtitle, text, title } from '../../primitives';

export default function Ceub() {
  //@ts-ignore
  const messages: IntlMessages = useMessages();

  return (
    <li>
      <hr />
      <div className="timeline-middle">
        <School />
      </div>
      <div className="timeline-start mb-10 md:text-end">
        <time className={subtitle()}>1998</time>
        <div className={title({ size: 'sm' })}>
          {messages.about.education.title}
        </div>
        <p className={text()}>
          {messages.about.education.text[1]}
          <span className='text-primary font-bold'> {messages.about.education.text[2]} </span>
          {messages.about.education.text[3]}
        </p>
      </div>
      <hr />
    </li>
  );
}
