'use client';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/modal';
import React, { useEffect, useState } from 'react';
import { title } from '../primitives';
import axios from 'axios';
import { ColorInfoType } from '@/types';
import { Button } from '@nextui-org/button';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import useMobileDetect from '@/hooks/mobileHook';
import { Input } from '@nextui-org/input';
import { HexColorPicker } from 'react-colorful';
import { makePallete } from '@/utils/pallete';
import ColorPredefinitions from './colorPredefinitions';
import { useMessages } from 'next-intl';

export default function ModalConfig({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [color, setColor] = useState('#316181');
  const [colorInfo, setColorInfo] = useState<ColorInfoType>();
  const [counter, setCounter] = useState(0);
  const currentColor = window.localStorage.getItem('themeColor') as string;
  const easterEgg = window.localStorage.getItem('rybEE');
  const [loading, setLoading] = useState(false);
  const { theme, setTheme } = useTheme();
  //@ts-ignore
  const messages: IntlMessages = useMessages();

  const getColorInfo = async (color: string) => {
    const response = await axios.get(
      `https://www.thecolorapi.com/id?hex=${color.replace('#', '')}&format=json`,
    );
    setColorInfo(response.data);
    setLoading(false);
  };

  const handleChange = (color: string) => {
    setColor(color);
    makePallete(color);
  };

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      getColorInfo(color);
    }, 500);
    return () => clearTimeout(timeout);
  }, [color]);

  useEffect(() => {
    if (counter === 10) {
      localStorage.setItem('rybEE', 'true');
      localStorage.setItem(
        'rybUserColors',
        JSON.stringify({
          color0: '',
          color1: '',
          color2: '',
          color3: '',
          color4: '',
          color5: '',
          color6: '',
          color7: '',
        }),
      );
    }
    const EEcounter = setTimeout(() => {
      setCounter(0);
    }, 1000);
    return () => clearTimeout(EEcounter);
  }, [counter]);

  useEffect(() => {
    if (localStorage.getItem("themeColor") as string) {
      setColor(currentColor);
    }
  }, []);

  return (
    <Modal
      classNames={{
        body: 'grid ',
      }}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      backdrop="opaque"
    >
      <ModalContent>
        <ModalHeader>
          <h2 className={title({ size: 'sm' })}>{messages.navbar.settings}</h2>
        </ModalHeader>
        <ModalBody>
          <HexColorPicker
            color={color}
            onChange={handleChange}
            style={{ width: '100%' }}
          />
          <div
            data-easteregg={!!easterEgg}
            className="grid w-full grid-cols-2 gap-4 data-[easteregg=true]:grid-cols-3"
          >
            <Button
              color="primary"
              isLoading={loading}
              onPress={() => {
                setCounter(counter + 1);
              }}
              size="lg"
            >
              {colorInfo?.name?.value}
            </Button>

            {easterEgg && (
              <Input
                label={'Cor'}
                size={'sm'}
                value={color}
                maxLength={7}
                onValueChange={handleChange}
              />
            )}

            <Button
              onPress={() =>
                theme === 'light' ? setTheme('dark') : setTheme('light')
              }
              size="lg"
              className="bg-default-100"
            >
              {theme === 'light' ? <Moon /> : <Sun />}
            </Button>
          </div>
        </ModalBody>
        <ModalFooter>
          <AnimatePresence>
            {!!easterEgg && (
              <ColorPredefinitions currentColor={color} setColor={setColor} />
            )}
          </AnimatePresence>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
