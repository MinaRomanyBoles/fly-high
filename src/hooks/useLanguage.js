import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'flyhigh-language';

const getStoredLanguage = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'ar' || stored === 'en' ? stored : 'en';
  } catch {
    return 'en';
  }
};

export const useLanguage = () => {
  const [language, setLanguageState] = useState(getStoredLanguage);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // ignore
    }
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const setLanguage = useCallback((lang) => {
    if (lang === 'en' || lang === 'ar') setLanguageState(lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => (prev === 'en' ? 'ar' : 'en'));
  }, []);

  return { language, setLanguage, toggleLanguage };
};

export default useLanguage;
