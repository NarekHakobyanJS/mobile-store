import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetecor from "i18next-browser-languagedetector";
import translationAM  from "./locales/am/translation.json";
import translationEN  from "./locales/en/translation.json";

const resources = {
    en : {
        translation : translationEN
    },
    am : {
        translation : translationAM
    },
}

i18n.use(LanguageDetecor).use(initReactI18next).init({
   fallbackLng : "en" ,
   resources,
   detection : {
    caches : ["cookie"]
   }
})

export default i18n