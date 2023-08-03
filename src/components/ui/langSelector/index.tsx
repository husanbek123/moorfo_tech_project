import styles from "./index.module.scss";
import { useState, useEffect } from "react";
import Option from "./option";

import { useTranslation } from "react-i18next";
import useStore, { Languages } from "../../../Store";

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState<boolean>();
  const { i18n } = useTranslation();
  const { theme, setLang } = useStore();

  useEffect(() => {
    setIsOpen(false);
  }, [i18n.language]);

  function ChangeLang(value: string) {
    setIsOpen(false);
    i18n.changeLanguage(value);
    setLang(i18n.language as Languages);
  }

  return (
    <div className={styles.component}>
      <div className={styles.select} onMouseLeave={() => setIsOpen(false)}>
        <div
          onClick={() => setIsOpen(!isOpen)}
          style={{
            borderColor: theme == "dark" ? "white" : "black",
          }}
          className={styles.select_body}
        >
          <span>{i18n.language.toUpperCase()}</span>
        </div>
        <div
          className={[
            styles.select_list,
            isOpen && styles.select_list_open,
          ].join(" ")}
        >
          <Option currentLang={i18n.language} value="uz" setValue={ChangeLang}>
            UZ
          </Option>
          <Option currentLang={i18n.language} value="en" setValue={ChangeLang}>
            EN
          </Option>
          <Option currentLang={i18n.language} value="ru" setValue={ChangeLang}>
            RU
          </Option>
        </div>
      </div>
    </div>
  );
}
