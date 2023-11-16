import {
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  CheckboxGroup,
} from '@nextui-org/react';
import { commonColors, semanticColors } from '@nextui-org/theme';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineBox from '../components/TimelineBox';
import { FaGraduationCap } from 'react-icons/fa';
import { MdOutlineWork } from 'react-icons/md';
import { useEffect, useState } from 'react';
import Translator from '../i18n/Translator';
import { useTheme } from 'next-themes';

function About() {
  const { theme } = useTheme();

  return (
    <div className="h-screen bg-[#a7a7a7] dark:bg-black">
      <VerticalTimeline>
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
          <Card className='bg-neutral-100'>
            <CardHeader className="p-4 text-right text-2xl">
              <Translator path="about.education.title" />
            </CardHeader>
            <CardBody className="text-xl font-normal">
              <Translator path="about.education.text.1" />{' '}
              <strong className="cursor-pointer text-primary-500 dark:text-secondary-400 hover:underline">
                <a href="https://www.uniceub.br/" target="_blank">
                  <Translator path="about.education.text.2" />
                </a>
              </strong>{' '}
              <Translator path="about.education.text.3" />
            </CardBody>
          </Card>
        </TimelineBox>
        <TimelineBox
          iconStyle={{
            background:
              theme === 'dark'
                ? semanticColors.dark.secondary[400]
                : semanticColors.light.primary[400],
            color: '#fff',
          }}
          icon={<MdOutlineWork />}
          date="2020-2222"
        >
          <Card className='bg-neutral-100'>
            <CardHeader className="p-4 text-right text-2xl">
              <Translator path="about.embrapa.title" />
            </CardHeader>
            <CardBody className="font-medium">
              <Translator path="about.embrapa.text" />
              <ul className="list-disc pl-4">
                <li>Buenos Aires</li>
                <li>Sydney</li>
                <li>San Francisco</li>
                <li>London</li>
                <li>Tokyo</li>
              </ul>
            </CardBody>
          </Card>
        </TimelineBox>
        <TimelineBox date="2222-0000">
          <Card className='bg-neutral-100'>
            <CardBody>carlos</CardBody>
          </Card>
        </TimelineBox>
        <VerticalTimelineElement date="2018-2023"></VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default About;
