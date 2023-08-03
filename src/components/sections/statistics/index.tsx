import LightShadow from "../../ui/lightShadow";
import styles from "./index.module.scss";
import StatisticCard from "./statisticCard";
import { useTranslation } from "react-i18next";

export default function Statistics() {
  const { t } = useTranslation();

  return (
    <section
      className={[
        styles.section,
        "container",
        "ver-paddings",
        "space_between_sections",
      ].join(" ")}
    >
      <LightShadow
        color="aqua"
        style={{
          right: "-7%",
          top: "1400px",
        }}
        radius="1000000px"
        scale="100px"
      />

      <StatisticCard data="12+" title={t("statistic.years")} />
      <StatisticCard data="150+" title={t("statistics.completed")} />
      <StatisticCard data="250+" title={t("statistics.costomers")} />
    </section>
  );
}
