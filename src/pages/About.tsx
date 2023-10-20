import { Card, CardBody } from '@nextui-org/react';
import { commonColors, semanticColors } from '@nextui-org/theme';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineBox from '../components/TimelineBox';
import { FaGraduationCap } from 'react-icons/fa';
import { useState } from 'react';

function About() {
  const [isDark] = useState(localStorage.getItem('theme') === 'dark');
  return (
    <div className="h-screen bg-[#a7a7a7] dark:bg-black">
      <VerticalTimeline>
        <TimelineBox
          iconStyle={{
            background: isDark ? semanticColors.dark.secondary[400]: semanticColors.light.primary[400],
            color: '#fff',
          }}
          icon={<FaGraduationCap />}
          date="2018-2023"
        >
          <Card>
            <CardBody>asdasdsad</CardBody>
          </Card>
        </TimelineBox>
        <TimelineBox date="2020-2222">
          <Card>
            <CardBody>aaaaaa2</CardBody>
          </Card>
        </TimelineBox>
        <VerticalTimelineElement date="2018-2023"></VerticalTimelineElement>
        <VerticalTimelineElement date="2018-2023"></VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default About;
