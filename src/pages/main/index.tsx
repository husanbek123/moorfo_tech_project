import styles from "./index.module.scss";
import Showcase from "../../components/sections/showcase";
import Adventages from "../../components/sections/adventages";
import Statistics from "../../components/sections/statistics";
import Solutions from "../../components/sections/solutions";
import Portfolio from "../../components/sections/portfolio";
import Contact from "../../components/sections/contact";

export default function Main(): JSX.Element {
  return (
    <div className={styles.main}>
      <Showcase />
      <Adventages />
      <Statistics />
      <Solutions />
      <Portfolio />
      <Contact />
    </div>
  );
}
