import styles from "./index.module.scss";
import ThemeToggle from "../../../ui/themeToggleButton";
import LanguageSelector from "../../../ui/langSelector";
import { useState } from "react";
import { IconMenu2 } from "@tabler/icons-react";
import useStore from "../../../../Store";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>();
  const { theme } = useStore();
  return (
    <header className={[styles.header, "container"].join(" ")}>
      <h1>SpaceX</h1>
      <button
        className={styles.header__menuToggle}
        onClick={() => setIsMenuOpen(true)}
      >
        <IconMenu2 size={32} color={theme == "dark" ? "white" : "black"} />
      </button>
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className={styles.header__dark_area}
        ></div>
      )}
      <div
        className={[
          styles.header__navigation,
          isMenuOpen && styles.header__open,
        ].join(" ")}
      >
        <ul>
          {Pages.map((page) => (
            <li key={page} onClick={(e) => console.log(e.currentTarget)}>
              <a href={`#${page.toLowerCase()}`}>{page}</a>
            </li>
          ))}
        </ul>
        <ThemeToggle
          color={isMenuOpen ? "white" : "black"}
          className={styles.header__theme_toggle}
        />
        <LanguageSelector />
      </div>
    </header>
  );
}
const Pages = ["Main", "Advantages", "Portfolio", "Contact"];

export { Pages };
