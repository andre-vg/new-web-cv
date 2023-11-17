import { semanticColors, Card, CardHeader, CardBody } from '@nextui-org/react';
import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import Translator from '../../i18n/Translator';
import TimelineBox from '../TimelineBox';
import { useTheme } from 'next-themes';

function Ceub() {
  const { theme } = useTheme();

  return (
    <TimelineBox
      iconStyle={{
        background:
          theme === 'dark'
            ? semanticColors.dark.secondary[400]
            : semanticColors.light.primary[400],
        color: '#fff',
      }}
      icon={<FaGraduationCap />}
      date="2018-2023"
    >
      <Card className="bg-neutral-100 p-4 p-4 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
        <CardHeader className="text-2xl">
          <Translator path="about.education.title" />
        </CardHeader>
        <CardBody className="text-xl font-normal">
          <Translator path="about.education.text.1" />{' '}
          <strong className="cursor-pointer text-primary-500 hover:underline dark:text-secondary-400">
            <a href="https://www.uniceub.br/" target="_blank">
              <Translator path="about.education.text.2" />
            </a>
          </strong>{' '}
          <Translator path="about.education.text.3" />
        </CardBody>
      </Card>
    </TimelineBox>
  );
}

export default Ceub;
