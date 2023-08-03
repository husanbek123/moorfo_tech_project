import styles from "./index.module.scss";
import PortfolioCard from "./portfolioCard";
import { useTranslation } from "react-i18next";

type Project = {
  imgSrc: string;
  title: string;
  description_uz: string;
  description_ru: string;
  description_en: string;
};

const Projects: Project[] = [
  {
    imgSrc:
      "https://webline.uz/storage/images/00867eb69f024799aeae995226944664.webp",
    description_en: "Turnkey website",
    description_uz: "Sayt yaratish",
    description_ru: "Сайт под ключ",
    title: "CHINT ELECTRIC",
  },
  {
    imgSrc:
      "https://webline.uz/storage/images/00867eb69f024799aeae995226944664.webp",
    description_en: "Turnkey website",
    description_uz: "Sayt yaratish",
    description_ru: "Сайт под ключ",
    title: "CHINT ELECTRIC",
  },
  {
    imgSrc:
      "https://webline.uz/storage/images/00867eb69f024799aeae995226944664.webp",
    description_en: "Turnkey website",
    description_uz: "Sayt yaratish",
    description_ru: "Сайт под ключ",
    title: "CHINT ELECTRIC",
  },
  {
    imgSrc:
      "https://webline.uz/storage/images/00867eb69f024799aeae995226944664.webp",
    description_en: "Turnkey website",
    description_uz: "Sayt yaratish",
    description_ru: "Сайт под ключ",
    title: "CHINT ELECTRIC",
  },
  {
    imgSrc:
      "https://webline.uz/storage/images/00867eb69f024799aeae995226944664.webp",
    description_en: "Turnkey website",
    description_uz: "Sayt yaratish",
    description_ru: "Сайт под ключ",
    title: "CHINT ELECTRIC",
  },
  {
    imgSrc:
      "https://webline.uz/storage/images/00867eb69f024799aeae995226944664.webp",
    description_en: "Turnkey website",
    description_uz: "Sayt yaratish",
    description_ru: "Сайт под ключ",
    title: "CHINT ELECTRIC",
  },
];

export default function Portfolio() {
  const { i18n } = useTranslation();
  return (
    <section
      id="portfolio"
      className={[styles.section, "container", "space_between_sections"].join(
        " "
      )}
    >
      <h1 className="font_h1">PORTFOLIO</h1>
      <div>
        {Projects.map((project) => (
          <PortfolioCard
            {...project}
            description={project[`description_${i18n.language}`]}
          />
        ))}
      </div>
    </section>
  );
}
