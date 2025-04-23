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
  const values = Array.from({ length: range }, (_, i) => startFrom + i);

  const firstRow = values.slice(0, 5);
  const secondRow = values.slice(5);

  return (
    <section className={styles.scaleGroup}>
      <div className={styles.scaleRow}>
        {firstRow.map((val) => (
          <RadioInput
            key={`${name}__${val}`}
            register={register}
            name={name}
            value={val}
            variant="numeric"
            icon={{
              src: ellipseIcon,
              alt: `rate-${val}`,
            }}
          />
        ))}
      </div>
      <div className={styles.scaleRow}>
        {secondRow.map((val) => (
          <RadioInput
            key={`${name}__${val}`}
            register={register}
            name={name}
            value={val}
            variant="numeric"
            icon={{
              src: ellipseIcon,
              alt: `rate-${val}`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
