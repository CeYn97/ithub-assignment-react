import type { UseFormRegister } from "react-hook-form";
import type { FormData } from "../../schema";
import styles from "./Rating.module.css";
import clsx from "clsx";
// import { useState } from "react";

interface RadioInput {
  register: UseFormRegister<FormData>;
  name: keyof FormData;
  value: string | number;
  icon: {
    src: string;
    alt: string;
  };
  variant?: "emoji" | "numeric";
}

export default function RadioInput({
  register,
  name,
  value,
  icon,
  variant = "emoji",
}: RadioInput) {
  const id = `${name}__${value}`;

  return (
    <label
      htmlFor={id}
      className={clsx(
        styles.inputWrapper,
        variant === "emoji" ? styles.emojiInput : styles.numericInput
      )}
    >
      <input
        type="radio"
        id={id}
        {...register(name)}
        value={value}
        className={styles.radio}
      />
      <div className={styles.iconContainer}>
        <img
          src={icon.src}
          alt={icon.alt}
          className={clsx(
            styles.icon,
            variant === "emoji" ? styles.emojiIcon : styles.numericIcon
          )}
        />
        {variant === "numeric" && (
          <span className={styles.numericValue}>{+value}</span>
        )}
      </div>
    </label>
  );
}
