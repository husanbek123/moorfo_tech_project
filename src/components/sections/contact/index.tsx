import Form from "./form";
import styles from "./index.module.scss";

export default function Contact() {
  return (
    <section
      id="contact"
      className={[
        styles.contact,
        "container",
        "ver-paddings",
        "space_between_sections",
      ].join(" ")}
    >
      <div className={styles.contact__text}>
        <h1>ДАВАЙТЕ НЕ НАЧНЕМ ВАШ ПРОЕКТ</h1>
        <p>
          Оставьте заявку, озвучьте ваши пожелания, всю их реализацию мы возьмем
          на себя.
        </p>
      </div>
      <div className={styles.contact__form}>
        <Form />
      </div>
    </section>
  );
}
