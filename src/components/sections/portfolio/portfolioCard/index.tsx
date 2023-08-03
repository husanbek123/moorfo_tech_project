import styles from "./index.module.scss";

type Props = {
  imgSrc: string;
  title: string;
  description: string;
};

export default function PortfolioCard({ imgSrc, title, description }: Props) {
  return (
    <div
      className={[styles.card, "light-text"].join(" ")}
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "cover",
      }}
    >
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
