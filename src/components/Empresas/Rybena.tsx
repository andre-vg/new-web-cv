import {
  semanticColors,
  Card,
  CardHeader,
  Avatar,
  CardBody,
} from '@nextui-org/react';
import { MdAccessibility } from 'react-icons/md';
import Translator from '../../i18n/Translator';
import TimelineBox from '../TimelineBox';
import { useTheme } from 'next-themes';
import Logo from '../../assets/empresas/rybena.png';
import { t } from 'i18next';

function Rybena() {
  const { theme } = useTheme();
  return (
    <TimelineBox
      iconStyle={{
        background:
          theme === 'dark'
            ? semanticColors.dark.secondary[400]
            : semanticColors.light.primary[400],
        color: '#fff',
      }}
      icon={<MdAccessibility />}
      date={`2023 - ${t('time.present')}`}
    >
      <Card className="bg-neutral-100 p-4 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
        <CardHeader className="gap-4 p-4 text-right text-2xl">
          <a href="https://www.rybena.com.br/" target="_blank">
            <Avatar
              src={Logo}
              size="lg"
              className="cursor-pointer bg-neutral-100"
              color={theme === 'light' ? 'primary' : 'secondary'}
              isBordered
              alt="Embrapa"
              imgProps={{
                className:
                  'object-scale-down hover:scale-125 transition-all duration-300 ease-in-out',
              }}
            />
          </a>
          <Translator path="about.rybena.title" />
        </CardHeader>
        <CardBody className="flex flex-col gap-4 text-xl font-normal">
          <Translator path="about.rybena.text" />
          <ul className="list-disc pl-4 text-primary-600 dark:text-secondary-600">
            <li>
              <Translator path="about.rybena.comp.1" />
            </li>
            <li>
              <Translator path="about.rybena.comp.2" />
            </li>
            <li>
              <Translator path="about.rybena.comp.3" />
            </li>
            <li>
              <Translator path="about.rybena.comp.4" />
            </li>
          </ul>
        </CardBody>
      </Card>
    </TimelineBox>
  );
}

export default Rybena;
