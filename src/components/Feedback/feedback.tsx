import type { UseFormRegister } from "react-hook-form";
import type { FormData } from "../../schema";
import styles from "./Feedback.module.css";

interface Feedback {
  register?: UseFormRegister<FormData>;
  name: keyof FormData;
}

export default function Feedback({ register, name }: Feedback) {
  return (
    <textarea
      {...(register ? register(name) : {})}
      className={styles.textarea}
      placeholder="Поделись своим комментарием"
    />
  );
}
