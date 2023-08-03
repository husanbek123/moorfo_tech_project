import styles from "./index.module.scss";
import Animation from "../../../assets/anim3.json";
import World from "../../../assets/cosmos2.json";
import DarkWorld from "../../../assets/back3.json";

import Lottie from "lottie-react";
import LightShadow from "../../ui/lightShadow";

import { Button } from "@mantine/core";
import useStore from "../../../Store";
import { useTranslation } from "react-i18next";

export default function Showcase() {
  const { theme } = useStore();
  const { t } = useTranslation();

  return (
    <>
      {theme == "light" ? (
        <Lottie
          className={styles.world_animation}
          animationData={World}
          // onAnimationEnd={(e) => e.stopPropagation()}
        />
      ) : (
        <Lottie
          className={styles.world_animation}
          animationData={DarkWorld}
          // onAnimationEnd={(e) => e.stopPropagation()}
        />
      )}
      <section
        id="main"
        className={[
          styles.showcase,
          "container",
          "space_between_sections",
        ].join(" ")}
        style={{
          position: "relative",
        }}
      >
        <LightShadow
          color="rgb(78, 255, 78)"
          scale={"150px"}
          style={{
            left: "-300px",
            bottom: "0",
            borderRadius: "100px",
            height: "1000px",
          }}
          radius="10000px"
        />
        <LightShadow
          color="aqua"
          scale={"100px"}
          style={{
            right: "-250px",
            top: "50px",
            borderRadius: "1000px",
          }}
          radius="10000000px"
        />
        <div className={styles.showcase__text}>
          <h6>{t("showcase.welcome")}</h6>
          <h1 className="font_h1">{t("showcase.title")}</h1>
          <div className={styles.showcase__text__buttons}>
            <Button color="green" size="lg" compact>
              Register
            </Button>
          </div>
        </div>
        <div className={styles.showcase__animation}>
          <Lottie
            animationData={Animation}
            className={styles.showcase__animation__item}
          />
        </div>
      </section>
    </>
  );
}
