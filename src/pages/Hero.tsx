import { TypeAnimation } from "react-type-animation";
import { motion as m } from "framer-motion";
import ThemeButton from "../components/ThemeButton";
import FotoMinha from "../assets/euCortado.jpg";
import { Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import useSound from "use-sound";
import ryanSound from "../assets/ryan.mp4";

function Hero() {
  const [ryanGosling, setRyanGosling] = useState(false);
  const [play, { stop }] = useSound(ryanSound, { volume: 0 });

  useEffect(() => {
    if (ryanGosling) {
      play();
    } else {
      stop();
    }
  }, [ryanGosling]);

  return (
    <div className="h-screen flex items-center justify-center gap-64">
      <m.div
        animate={{ y: [10, -10] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="flex-col flex gap-2"
      >
        <h1 className="text-4xl font-bold">My name is</h1>
        <h1 className="text-7xl text-center font-bold">André Gonçalves</h1>
        <h1 className="text-2xl text-right font-bold">& I am</h1>
        <TypeAnimation
          sequence={[
            "A Developer",
            1000,
            "A Designer",
            1000,
            "A Learner",
            1000,
            "Ryan Gosling",
            () => {
              setRyanGosling(true);
            },
            2000,
            () => setRyanGosling(false),
          ]}
          repeat={Infinity}
          wrapper="h1"
          className="text-7xl"
        />
        <ThemeButton />
      </m.div>
      <Image
        src={
          !ryanGosling
            ? FotoMinha
            : "https://s2-quem.glbimg.com/PRYCl5tqFH2cTK2Sxj6ALi1jZUw=/0x0:620x620/fit-in/620x620/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2022/s/n/8fhdgQTcmdX9DFH9hqZA/2022-06-28-ryan-gosling.jpeg"
        }
        alt="André Gonçalves em preto e branco"
        className="rounded-full w-96 h-96 shadow-xl shadow-primary-100 dark:shadow-lg dark:shadow-secondary-400 transition-all duration-500 ease-in-out"
      />
    </div>
  );
}

export default Hero;
