import { TypeAnimation } from 'react-type-animation';
import { motion as m } from 'framer-motion';
import ThemeButton from '../components/ThemeButton';
import FotoMinha from '../assets/euCortado.jpg';
import { Image } from '@nextui-org/react';
import { useEffect, useState } from 'react';
// @ts-ignore
import useSound from 'use-sound';

function Hero() {
  // const [ryanGosling, setRyanGosling] = useState(false);
  // const [play, { stop }] = useSound(ryanSound, { volume: 0.1 });

  // useEffect(() => {
  //   if (ryanGosling) {
  //     play();
  //   } else {
  //     stop();
  //   }
  // }, [ryanGosling]);

  return (
    <div
      id="Hero"
      className="flex h-screen items-center justify-center gap-64 bg-wavesLight bg-cover dark:bg-waves"
    >
      <m.div
        animate={{ y: [10, -10] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        className="flex flex-col gap-2"
      >
        <h1 className="text-4xl font-bold">My name is</h1>
        <h1 className="text-center text-7xl font-bold">André Gonçalves</h1>
        <h1 className="text-right text-2xl font-bold">& I am</h1>
        <TypeAnimation
          sequence={[
            'A Developer',
            1000,
            'A Designer',
            1000,
            'A Learner',
            1000,
          ]}
          repeat={Infinity}
          wrapper="h1"
          className="text-7xl"
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
