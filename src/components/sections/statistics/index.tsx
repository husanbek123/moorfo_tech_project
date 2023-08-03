import LightShadow from "../../ui/lightShadow";
import styles from "./index.module.scss";
import StatisticCard from "./statisticCard";

export default function Statistics() {
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

      <StatisticCard data="12+" title="Успешных лет в IT бизнесе" />
      <StatisticCard data="150+" title="ВЫПОЛНЕНЫХ ПРОЕКТОВ ПОД КЛЮЧ" />
      <StatisticCard data="250+" title="Довольных клиентов" />
    </section>
  );
}
