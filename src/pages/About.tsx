import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Embrapa from '../components/Empresas/Embrapa';
import Ceub from '../components/Empresas/Ceub';
import Icts from '../components/Empresas/Icts';
import Rybena from '../components/Empresas/Rybena';

function About() {
  return (
    <div className="h-full bg-[#a7a7a7] dark:bg-black">
      <VerticalTimeline>
        <Ceub />
        <Embrapa />
        <Icts />
        <Rybena />
      </VerticalTimeline>
      <div className="h-96 bg-waves2Light dark:bg-waves2" />
    </div>
  );
}

export default About;
