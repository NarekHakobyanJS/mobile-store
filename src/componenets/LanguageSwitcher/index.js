import {useTranslation} from "react-i18next";
import "./lng.scss";
import en from "../../image/en.png";
import am from "../../image/am.png";

export default function LanguageSwitcher() {

    const {i18n} = useTranslation();

    const switcher = (lng) => () => {
        i18n.changeLanguage(lng)
    }
  return (
    <div className="lng">
        <div onClick={switcher('en')} className="en"> </div>
        <div onClick={switcher('am')} className="am"> </div>
    </div>
  )
}
