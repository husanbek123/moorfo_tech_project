import styles from "./index.module.scss";

type Props = {
  title: string;
  data: string;
};

export default function StatisticCard({ data, title }: Props) {
  return (
    <div className={styles.statisticCard}>
      <h1>{data}</h1>
      <h3>{title}</h3>
    </div>
  );
}
