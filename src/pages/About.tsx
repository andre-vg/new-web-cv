import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Embrapa from '../components/Empresas/Embrapa';
import Ceub from '../components/Empresas/Ceub';
import Icts from '../components/Empresas/Icts';
import Rybena from '../components/Empresas/Rybena';
import Translator from '../i18n/Translator';

function About() {
  return (
    <div id="about" className="h-full bg-[#a7a7a7] dark:bg-black">
      <div className="mb-20 sm:flex-row md:px-40 lg:gap-40 lg:px-80">
        <h1 className="text-center text-7xl font-bold text-[#2c2d2d] dark:text-[#dbdbdb]">
          <Translator path="about.title" />
        </h1>
        <p className="mt-4 text-center text-4xl text-[#2c2d2d] dark:text-[#dbdbdb]">
          <Translator path="about.subtitle" />
        </p>
      </div>
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
