import type { UseFormRegister } from "react-hook-form";

import RadioInput from "./RadioInput";

import type { FormData } from "../../schema";
import styles from "./Rating.module.css";

import ellipseIcon from "../../assets/icons/ellipse.svg";

interface NumericScale {
  range: number;
  register: UseFormRegister<FormData>;
  name: keyof FormData;
  startFrom?: number;
}

export default function NumericScale({
  range,
  register,
  name,
  startFrom = 1,
}: NumericScale) {
  return (
    <section className={styles.scale}>
      {Array.from({ length: range }, (_, i) => {
        const actualValue = startFrom + i;
        return (
          <RadioInput
            key={`${name}__${actualValue}`}
            register={register}
            name={name}
            value={actualValue}
            variant="numeric"
            icon={{
              src: ellipseIcon,
              alt: `rate-${actualValue}`,
            }}
          />
        );
      })}
    </section>
  );
}
