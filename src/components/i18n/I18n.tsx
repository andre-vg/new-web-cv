import React from 'react';
import { useTranslation } from 'react-i18next';
import BrasilFlag from '../../assets/brasil-flag.svg';
import EuaFlag from '../../assets/eua-flag.svg';
import {
  Avatar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react';

const I18n = () => {
  const { i18n } = useTranslation();

  function handleChangeLanguage(language: any) {
    i18n.changeLanguage(language);
  }

  const paises = [
    { value: 'pt-BR', label: 'Português', image: BrasilFlag },
    { value: 'en-US', label: 'English', image: EuaFlag },
  ];

  const selectedLanguage = i18n.language; // Idioma selecionado

  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex">
      <Popover key={'blur'} backdrop="blur">
        <PopoverTrigger onClick={() => setOpen(!open)}>
          <Avatar
            src={selectedLanguage === 'pt-BR' ? BrasilFlag : EuaFlag}
            size="sm"
            className="cursor-pointer"
          />
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <div className="flex flex-col">
            {paises.map(pais => (
              <div
                key={pais.value}
                className="flex cursor-pointer items-center gap-4 p-4 hover:rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800"
                onClick={() => {
                  handleChangeLanguage(pais.value);
                }}
              >
                <Avatar src={pais.image} size="sm" />
                <p>{pais.label}</p>
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default I18n;
