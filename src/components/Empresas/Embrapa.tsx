import {
  Card,
  CardHeader,
  Avatar,
  CardBody,
  semanticColors,
} from '@nextui-org/react';
import Translator from '../../i18n/Translator';
import { useTheme } from 'next-themes';
import Logo from '../../assets/empresas/embrapa.svg';
import { MdOutlineWork } from 'react-icons/md';
import TimelineBox from '../TimelineBox';

function Embrapa() {
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
      icon={<MdOutlineWork />}
      date="2021-2022"
    >
      <Card className="bg-neutral-100 p-4 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
        <CardHeader className="gap-4 p-4 text-right text-2xl">
          <a href="https://www.embrapa.br/pt/home" target="_blank">
            <Avatar
              src={Logo}
              size="lg"
              className="cursor-pointer bg-neutral-100"
              color={theme === 'light' ? 'primary' : 'secondary'}
              isBordered
              alt="Embrapa"
              imgProps={{
                className:
                  'object-contain hover:scale-125 transition-all duration-300 ease-in-out',
              }}
            />
          </a>
          <Translator path="about.embrapa.title" />
        </CardHeader>
        <CardBody className="flex flex-col gap-4 text-xl font-normal">
          <Translator path="about.embrapa.text" />
          <ul className="list-disc pl-4 text-primary-600 dark:text-secondary-600">
            <li>
              <Translator path="about.embrapa.comp.1" />
            </li>
            <li>
              <Translator path="about.embrapa.comp.2" />
            </li>
            <li>
              <Translator path="about.embrapa.comp.3" />
            </li>
          </ul>
        </CardBody>
      </Card>
    </TimelineBox>
  );
}

export default Embrapa;
