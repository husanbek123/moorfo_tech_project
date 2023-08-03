import styles from "./index.module.scss";
import Lottie from "lottie-react";

import {} from "lottie-react";

type Props = {
  animation: unknown;
  title: string;
  text: string;
  animationSide?: "right" | "left";
  className?: string;
};

export default function SolutionCard({
  animation,
  className,
  text,
  title,
  animationSide = "right",
}: Props) {
  return (
    <div
      className={[styles.solution, className].join(" ")}
      style={{
        flexDirection: animationSide == "right" ? "row" : "row-reverse",
      }}
    >
      <div className={styles.text}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className={styles.animation}>
        <Lottie animationData={animation} className={styles.animation_item} />
      </div>
    </div>
  );
}
