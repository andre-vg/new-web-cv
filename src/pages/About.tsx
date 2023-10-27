import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { commonColors, semanticColors } from '@nextui-org/theme';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineBox from '../components/TimelineBox';
import { FaGraduationCap } from 'react-icons/fa';
import { MdOutlineWork } from 'react-icons/md';
import { useState } from 'react';

function About() {
  const [isDark] = useState(localStorage.getItem('theme') === 'dark');
  return (
    <div className="h-screen bg-[#a7a7a7] dark:bg-black">
      <VerticalTimeline>
        <TimelineBox
          iconStyle={{
            background: isDark
              ? semanticColors.dark.secondary[400]
              : semanticColors.light.primary[400],
            color: '#fff',
          }}
          icon={<FaGraduationCap />}
          date="2018-2023"
        >
          <Card>
            <CardHeader className="p-4 text-right text-2xl">
              Education
            </CardHeader>
            <p className="px-5 pb-5 font-medium">
              Graduated from{' '}
              <strong className="cursor-pointer text-secondary-400 hover:underline">
                Unified Teaching Center of Brasília
              </strong>{' '}
              with a Bachelor of Science in Computer Science. Proficient in
              Python and JavaScript. Experience in web development and project
              management.
            </p>
          </Card>
        </TimelineBox>
        <TimelineBox
          iconStyle={{
            background: isDark
              ? semanticColors.dark.secondary[400]
              : semanticColors.light.primary[400],
            color: '#fff',
          }}
          icon={<MdOutlineWork />}
          date="2020-2222"
        >
          <Card>
            <CardHeader className="p-4 text-right text-2xl">
              Experience
            </CardHeader>
            <CardBody className="font-medium">Pouca Experiencia </CardBody>
          </Card>
        </TimelineBox>
        <TimelineBox date="2222-0000">
          <Card>
            <CardBody>carlos</CardBody>
          </Card>
        </TimelineBox>
        <VerticalTimelineElement date="2018-2023"></VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default About;
