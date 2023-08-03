import styles from "./index.module.scss";
import { Pages } from "../navbar";
import { useTranslation } from "react-i18next";

import { IconArrowBigUpLines } from "@tabler/icons-react";
export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={[styles.footer, "container"].join(" ")}>
      <div className={styles.footer__text}>
        <h1>SpaceX</h1>
        <p>{t("footer.text")}</p>
      </div>
      <ul className={styles.footer__nav}>
        {Pages.map((page) => (
          <li>
            <a href={`#${page.toLowerCase()}`}>{page}</a>
          </li>
        ))}
      </ul>
      <div className={styles.to_top}>
        <a href="#top">
          <IconArrowBigUpLines size={40} />
        </a>
      </div>
    </footer>
  );
}
