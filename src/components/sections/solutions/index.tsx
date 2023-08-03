import styles from "./index.module.scss";
import SolutionCard from "./solutionCard";

import TeamAnimation from "../../../assets/team.json";
import TeamAnimation2 from "../../../assets/team2.json";
import TeamAnimation3 from "../../../assets/cosmos.json";

import { useTranslation } from "react-i18next";

export default function Solutions() {
  const { t } = useTranslation();

  return (
    <div
      className={[styles.solutions, "container", "space_between_sections"].join(
        " "
      )}
    >
      <SolutionCard
        title={t("solution.title")}
        text={t("solution.text")}
        animation={TeamAnimation}
        animationSide="right"
      />
      <SolutionCard
        title={t("solution.title")}
        text={t("solution.text")}
        animation={TeamAnimation2}
        animationSide="left"
      />
      <SolutionCard
        title={t("solution.title")}
        text={t("solution.text")}
        animation={TeamAnimation3}
        animationSide="right"
      />
    </div>
  );
}
