import styles from "./index.module.scss";
import useStore from "../../../../Store";

export default function Form() {
  const { theme } = useStore();
  function Submit(e) {
    e.preventDefault();
    const form = document.getElementById("form") as HTMLFormElement;

    const formData = new FormData(form);
    const arr = [];
    for (const [key, value] of formData) {
      arr.push(`${key}: ${value}`);
    }
    const a = Object.fromEntries(formData);
    console.log(a);
    return a;
  }

  return (
    <form
      id="form"
      className={[styles.form, theme == "light" && styles.form_light].join(" ")}
      onSubmit={Submit}
    >
      <div>
        <input placeholder="name" name="name" type="text" />
        <input placeholder="phone" name="phone" type="text" />
      </div>
      <input placeholder="email" name="email" type="email" />
      <textarea placeholder="message" name="text" />
      <button type="submit">Submit</button>
    </form>
  );
}
