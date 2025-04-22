import type { UseFormRegister } from "react-hook-form";
import clsx from "clsx";

import RadioInput from "./RadioInput";

import styles from "./Rating.module.css";
import type { FormData } from "../../schema";

import emojiVeryBad from "../../assets/icons/rating-emoji-veryBad.svg";
import emojiBad from "../../assets/icons/rating-emoji-bad.svg";
import emojiNormal from "../../assets/icons/rating-emoji-normal.svg";
import emojiHappy from "../../assets/icons/rating-emoji-happy.svg";
import emojiVeryHappy from "../../assets/icons/rating-emoji-veryHappy.svg";

interface EmojiScale {
  range: number;
  register: UseFormRegister<FormData>;
  name: keyof FormData;
}

const EMOJIES = [
  {
    value: 0,
    icon: {
      src: emojiVeryBad,
      alt: "very-bad",
    },
  },
  {
    value: 1,
    icon: {
      src: emojiBad,
      alt: "bad",
    },
  },
  {
    value: 2,
    icon: {
      src: emojiNormal,
      alt: "normal",
    },
  },
  {
    value: 3,
    icon: {
      src: emojiHappy,
      alt: "happy",
    },
  },
  {
    value: 4,
    icon: {
      src: emojiVeryHappy,
      alt: "very-happy",
    },
  },
];

export default function EmojiScale({ range, register, name }: EmojiScale) {
  return (
    <section className={clsx(styles.scale)}>
      {EMOJIES.slice(0, range).map((props) => (
        <RadioInput
          key={`${name}__${props.icon.alt}`}
          {...props}
          register={register}
          name={name}
        />
      ))}
    </section>
  );
}
