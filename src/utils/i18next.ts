import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import uz from "../locales/uz/default.json";
import ru from "../locales/ru/default.json";
import en from "../locales/en/default.json";

function TranslationSetup(lang: string | null) {
  if (lang) {
    console.log("working 1");

    const Myi18 = i18next.use(initReactI18next).init({
      lng: lang ? lang : "uz",
      resources: {
        uz: { translation: uz },
        ru: { translation: ru },
        en: { translation: en },
      },
    });
    return Myi18;
  } else {
    console.log("working 2");

    const Myi18 = i18next
      .use(initReactI18next)
      .use(LanguageDetector)
      .init({
        resources: {
          uz: { translation: uz },
          ru: { translation: ru },
          en: { translation: en },
        },
      });
    return Myi18;
  }
}

export default TranslationSetup;
