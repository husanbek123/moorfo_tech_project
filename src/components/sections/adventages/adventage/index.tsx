import styles from "./index.module.scss";

type Props = {
  title: string;
  img: string;
  order: number;
};

export default function Adventage({ img, title, order }: Props) {
  return (
    <div className={styles.adventage}>
      <div className={styles.adventage__text}>
        <img src={img} alt="" />
        <h3>{title}</h3>
      </div>
      <div className={styles.adventage__order}>
        <h2>{order < 10 ? `0${order}` : order}</h2>
      </div>
    </div>
  );
}
