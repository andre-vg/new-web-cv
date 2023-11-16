import { TypeAnimation } from 'react-type-animation';
import { motion as m } from 'framer-motion';
import FotoMinha from '../assets/euCortado.jpg';
import { Image } from '@nextui-org/react';
// @ts-ignore
import useSound from 'use-sound';
import '../assets/cursor.css';
import Translator from '../i18n/Translator';
import { t } from 'i18next';

function Hero() {
  return (
    <div
      id="Hero"
      className="flex h-screen items-center justify-center gap-48 bg-wavesLight bg-cover dark:bg-waves"
    >
      <m.div
        animate={{ y: [10, -10] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        className="flex w-3/4 flex-col gap-2 md:w-auto"
      >
        <h1 className="text-2xl font-bold md:text-4xl">
          <Translator path="hero.greeting" />
        </h1>
        <h1 className="text-center text-6xl font-bold md:text-7xl">
          André Gonçalves
        </h1>
        <h1 className="text-right text-xl font-bold md:text-2xl">
          <Translator path="hero.is" />
        </h1>
        <TypeAnimation
          sequence={[
            t('hero.adj.1'),
            1000,
            t('hero.adj.2'),
            1000,
            t('hero.adj.3'),
            1000,
            t('hero.adj.4'),
            1000,
            t('hero.adj.5'),
            1000,
          ]}
          repeat={Infinity}
          cursor={false}
          wrapper="h1"
          className="type text-5xl md:text-7xl"
        />
      </m.div>
      <m.div
        animate={{ y: [10, -10] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0.6,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        className="hidden xl:block"
      >
        <Image
          src={FotoMinha}
          alt="André Gonçalves em preto e branco"
          className="h-96 w-96 rounded-bl-[10rem] rounded-br-[18rem] rounded-tl-[8rem] rounded-tr-[5rem] shadow-xl shadow-default-400 transition-all duration-500 ease-in-out dark:shadow-lg dark:shadow-default-400"
        />
      </m.div>
    </div>
  );
}

export default Hero;
