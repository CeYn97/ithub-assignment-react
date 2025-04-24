import type { UseFormRegister } from "react-hook-form";
import type { FormData } from "../../schema";
import styles from "./EmailForm.module.css";
import emailIcon from "../../assets/icons/emailIcon.svg";

interface Email {
  register?: UseFormRegister<FormData>;
  name: keyof FormData;
}

export default function Email({ register, name }: Email) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.iconbox}>
        <img src={emailIcon} alt="email icon" className={styles.icon} />
      </div>
      <input
        type="email"
        {...(register ? register(name) : {})}
        className={styles.input}
        placeholder="name@example.com"
      />
    </div>
  );
}
