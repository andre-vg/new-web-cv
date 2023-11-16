import React from 'react'
import { useTranslation } from 'react-i18next'
// useTranslation é um hook 
// que devolve uma função de tradução (t) e a instância do i18n

// Importa as bandeiras (imagens e componente)
import BrasilFlag from '../../assets/brasil-flag.svg'
import EuaFlag from '../../assets/eua-flag.svg'
import Flag from './Flag'

const I18n = () => {
  const { i18n } = useTranslation()
  // Instância do i18n

  function handleChangeLanguage(language:any) {
    // Trocando o idioma na chamada da função
    i18n.changeLanguage(language)
  }

  const selectedLanguage = i18n.language // Idioma selecionado
  return (
    <div className="flex">
      <Flag
        image={BrasilFlag}
        isSelected={selectedLanguage === 'pt-BR'} // Verifica o idioma escolhido
        // @ts-ignore
        onClick={() => handleChangeLanguage('pt-BR')} // Troca o idioma para pt-BR
      />
      <Flag
        image={EuaFlag}
        isSelected={selectedLanguage === 'en-US'} // Verifica o idioma escolhido
        // @ts-ignore
        onClick={() => handleChangeLanguage('en-US')} // Troca o idioma para en-US
      />
    </div>
  )
}

export default I18n