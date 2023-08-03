import React from "react";
import styles from "./index.module.scss";

type Props = {
  color: string;
  radius?: string;
  scale?: string;
} & React.HTMLProps<HTMLDivElement>;

export default function LightShadow({
  scale = "100px",
  color,
  radius = "1000px",
  style,
}: Props) {
  return (
    <div
      className={styles.lightShadow}
      style={{
        boxShadow: `0 0 ${radius} ${scale} ${color}`,
        position: "absolute",
        width: "1px",
        height: "1px",
        ...style,
      }}
    ></div>
  );
}
