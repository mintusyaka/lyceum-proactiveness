import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationUk from './uk.json';
import translationEn from './en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      uk: { translation: translationUk },
      en: { translation: translationEn },
    },
    lng: 'uk',          // мова за замовчуванням
    fallbackLng: 'en',  // якщо нема перекладу
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
