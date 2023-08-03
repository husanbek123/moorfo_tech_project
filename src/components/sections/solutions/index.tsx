import styles from "./index.module.scss";
import SolutionCard from "./solutionCard";

import TeamAnimation from "../../../assets/team.json";
import TeamAnimation2 from "../../../assets/team2.json";
import TeamAnimation3 from "../../../assets/cosmos.json";

export default function Solutions() {
  return (
    <div
      className={[styles.solutions, "container", "space_between_sections"].join(
        " "
      )}
    >
      <SolutionCard
        title="ИНДИВИДУАЛЬНЫЙ ПОДХОД"
        text="Мы фокусируемся на том, чтобы быть гибкими и реагировать на потребности клиента."
        animation={TeamAnimation}
        animationSide="right"
      />
      <SolutionCard
        title="ИНДИВИДУАЛЬНЫЙ ПОДХОД"
        text="Мы фокусируемся на том, чтобы быть гибкими и реагировать на потребности клиента."
        animation={TeamAnimation2}
        animationSide="left"
      />
      <SolutionCard
        title="ИНДИВИДУАЛЬНЫЙ ПОДХОД"
        text="Мы фокусируемся на том, чтобы быть гибкими и реагировать на потребности клиента."
        animation={TeamAnimation3}
        animationSide="right"
      />
    </div>
  );
}
