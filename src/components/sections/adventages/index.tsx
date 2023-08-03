import styles from "./index.module.scss";
import Adventage from "./adventage";

interface OurAdventage {
  title: string;
  img: string;
}

type Props = {
  adventages?: OurAdventage[];
};

const defaultAdventages: OurAdventage[] = [
  {
    title: "Разработка мобильных приложений",
    img: "https://webline.uz/storage/media/icons/mobile_apps.svg",
  },
  {
    title: "Разработка мобильных приложений",
    img: "https://webline.uz/storage/media/icons/mobile_apps.svg",
  },
  {
    title: "Разработка мобильных приложений",
    img: "https://webline.uz/storage/media/icons/mobile_apps.svg",
  },
  {
    title: "Разработка мобильных приложений",
    img: "https://webline.uz/storage/media/icons/mobile_apps.svg",
  },
  {
    title: "Разработка мобильных приложений",
    img: "https://webline.uz/storage/media/icons/mobile_apps.svg",
  },
  {
    title: "Разработка мобильных приложений",
    img: "https://webline.uz/storage/media/icons/mobile_apps.svg",
  },
  {
    title: "Разработка мобильных приложений",
    img: "https://webline.uz/storage/media/icons/mobile_apps.svg",
  },
];

export default function Adventages({ adventages = defaultAdventages }: Props) {
  return (
    <section
      className={[
        "container",
        "space_between_sections",
        styles.adventages,
      ].join(" ")}
    >
      <header>
        <h1 id="advantages" className="font_h1">
          МЫ ПОМОЖЕМ СТАТЬ ВАШЕМУ БИЗНЕСУ УНИКАЛЬНЫМ И ПРИБЫЛЬНЫМ
        </h1>
      </header>

      <div className={styles.adventages__main}>
        {adventages.map((adventage, index) => (
          <Adventage order={index + 1} {...adventage} />
        ))}
      </div>
    </section>
  );
}
