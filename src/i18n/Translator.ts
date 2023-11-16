import { useTranslation } from 'react-i18next';
// Importamos o hook

interface TranslatorProps {
  path: string;
}

const Translator = ({ path }: TranslatorProps) => {
  const { t } = useTranslation(); // Função que traduz

  // Retornamos a função passando como parametro o caminho (path)
  // de onde está localizado o texto que desejamos traduzir
  return t(path);
};

export default Translator;
