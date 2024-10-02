import { makePallete } from "@/utils/pallete";
import { Button } from "@nextui-org/button";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import { Check, Plus } from "lucide-react";

export default function ColorPredefinitions({
  currentColor,
  setColor,
}: {
  currentColor: string;
  setColor: (color: any) => void;
}) {
  const [userColors, setUserColors] = useState<any>(
    Object.keys(localStorage).includes("rybUserColors") &&
      JSON.parse(localStorage.getItem("rybUserColors") as string),
  );

  const isEqual = (color1: string, color2: string) => {
    return color1 === color2;
  };

  return (
    <m.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        type: "spring",
      }}
      className="grid w-full grid-cols-8 place-items-center gap-2 rounded-xl border-2 border-primary p-2"
    >
      {Array.from(Object.values(userColors || {})).map(
        (color: any, index: number) =>
          color === "" ? (
            <Button
              key={index}
              isIconOnly
              className="size-8 rounded-full"
              style={{ backgroundColor: color }}
              onPress={() => {
                setUserColors({
                  ...userColors,
                  [`color${index}`]: currentColor,
                });
                localStorage.setItem(
                  "rybUserColors",
                  JSON.stringify({
                    ...userColors,
                    [`color${index}`]: currentColor,
                  }),
                );
              }}
            >
              <AnimatePresence>
                <m.div
                  initial={{
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0,
                  }}
                >
                  <Plus size={24} />
                </m.div>
              </AnimatePresence>
            </Button>
          ) : (
            <Button
              key={index}
              isIconOnly
              className="size-8 rounded-full"
              style={{ backgroundColor: color }}
              onPress={() => {
                setColor(color);
                makePallete(color);
              }}
              onKeyDown={(e) => {
                if (e.key === "Backspace" || e.key === "Delete") {
                  setUserColors({
                    ...userColors,
                    [`color${index}`]: "",
                  });
                  localStorage.setItem(
                    "rybUserColors",
                    JSON.stringify({
                      ...userColors,
                      [`color${index}`]: "",
                    }),
                  );
                }
              }}
            >
              <AnimatePresence>
                {isEqual(currentColor, color) && (
                  <m.div
                    initial={{
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0,
                    }}
                  >
                    <Check size={24} />
                  </m.div>
                )}
              </AnimatePresence>
            </Button>
          ),
      )}
      <m.p
        animate={{
          scale: 0,
          height: 0,
          display: "none",
          transition: {
            delay: 3,
          },
        }}
        className="col-span-8 select-none bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-center text-transparent"
      >
        Você encontrou um easterEgg
      </m.p>
    </m.div>
  );
}
