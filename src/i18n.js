import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ptTranslation from "./locales/pt.json";
import enTranslation from "./locales/en.json";
import esTranslation from "./locales/es.json";

const resources = {
  pt: ptTranslation,
  en: enTranslation,
  es: esTranslation,
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "pt",
    fallbackLng: "pt",

    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
