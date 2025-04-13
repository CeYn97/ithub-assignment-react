import type { UseFormRegister } from "react-hook-form"
import clsx from "clsx"

import RadioInput from "./RadioInput"

import styles from './Rating.module.css'
import type { FormData } from "../../schema"

import emojiHappi from '../../assets/icons/rating-emoji-happy.svg'

interface EmojiScale {
  range: number
  register: UseFormRegister<Partial<FormData>>
  name: keyof FormData
}

const EMOJIES = [
  {
    value: 0,
    icon: {
      src: emojiHappi,
      alt: 'very-bad'
    },
  },
  {
    value: 1,
    icon: {
      src: emojiHappi,
      alt: 'bad'
    },
  },
  {
    value: 2,
    icon: {
      src: emojiHappi,
      alt: 'normal'
    },
  },
  {
    value: 3,
    icon: {
      src: emojiHappi,
      alt: 'happy'
    },
  },
  {
    value: 4,
    icon: {
      src: emojiHappi,
      alt: 'very-happy'
    },
  },
]

export default function EmojiScale({ range, register, name }: EmojiScale) {
  return (
    <section className={clsx(styles.scale)}>
      {EMOJIES.slice(0, range).map((props) => <RadioInput key={`${name}__${props.icon.alt}`} {...props} register={register} name={name} />)}
    </section>
  )
}
