import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import {
  CONTENT,
  LANGUAGES,
} from '@/utils/locale';

const LocaleContext = createContext();

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider');
  }
  return context;
};

export const LocaleProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {

    const saved = localStorage.getItem('preferred-language');
    if (saved && LANGUAGES[saved]) return saved;
    const browserLang = navigator.language.split('-')[0];
    return LANGUAGES[browserLang] ? browserLang : 'en';
  });

  const [content, setContent] = useState(() => CONTENT.hero[language]);

  useEffect(() => {
    localStorage.setItem('preferred-language', language);
    setContent(CONTENT.hero[language]);
    document.documentElement.dir = LANGUAGES[language].direction;
    document.documentElement.lang = language;
  }, [language]);

  const changeLanguage = (langCode) => {
    if (LANGUAGES[langCode]) {
      setLanguage(langCode);
    }
  };

  const t = (key, path = 'hero') => {
    const keys = key.split('.');
    let value = CONTENT[path][language];
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) {
        console.warn(`Translation key "${key}" not found for language "${language}"`);
        return key;
      }
    }
    
    return value;
  };

  const getCommonTranslation = (key) => {
    return CONTENT.common[language][key] || key;
  };

  const getNavTranslation = (key) => {
    return LANGUAGES[language]?.nav?.[key] || key;
  };

  const getNavItems = () => {
    return [
      { key: 'home', path: '/' },
      { key: 'services', path: '/services' },
      { key: 'doctors', path: '/doctors' },
      { key: 'appointment', path: '/appointment' },
      { key: 'contact', path: '/contact' },
    ].map(item => ({
      ...item,
      label: getNavTranslation(item.key)
    }));
  };

  return (
    <LocaleContext.Provider value={{
      language,
      languages: LANGUAGES,
      content,
      changeLanguage,
      t,
      getCommon: getCommonTranslation,
      getNavItems
    }}>
      {children}
    </LocaleContext.Provider>
  );
};