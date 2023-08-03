import Form from "./form";
import styles from "./index.module.scss";

import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className={[
        styles.contact,
        "container",
        "ver-paddings",
        "space_between_sections",
      ].join(" ")}
    >
      <div className={styles.contact__text}>
        <h1>{t("contact.title")}</h1>
        <p>{t("contact.text")}</p>
      </div>
      <div className={styles.contact__form}>
        <Form />
      </div>
    </section>
  );
}
