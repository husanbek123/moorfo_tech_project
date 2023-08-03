import { CSSProperties, ReactNode } from "react";
import styles from "./index.module.scss";

type Props = {
  children: ReactNode;
  theme?: "light" | "dark";
  customThemes?: string[];
};

export default function ThemeProvider({ children, theme }: Props) {
  const Dark: CSSProperties = {
    backgroundColor: "#181818",
    color: "white",
  };

  const Light: CSSProperties = {
    backgroundColor: "white",
    color: "black",
  };

  //   const Light: CSSProperties = {
  //     backgroundColor: "black",
  //     color: "white",
  //   };

  return (
    <div className={styles.provider} style={theme == "light" ? Light : Dark}>
      {children}
    </div>
  );
}
