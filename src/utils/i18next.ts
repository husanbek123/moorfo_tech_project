import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import uz from "../../public/locales/uz/common.json";
import ru from "../../public/locales/ru/common.json";

function TranslationSetup(lang: string | null) {
  if (lang) {
    console.log("working 1");

    const Myi18 = i18next.use(initReactI18next).init({
      lng: lang ? lang : "uz",
      resources: {
        uz: { translation: uz },
        ru: { translation: ru },
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
        },
      });
    return Myi18;
  }
}

export default TranslationSetup;
