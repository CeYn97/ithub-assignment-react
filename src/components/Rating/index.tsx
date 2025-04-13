import clsx from 'clsx'
import type { UseFormRegister } from 'react-hook-form'

import EmojiScale from './EmojiScale'
import NumericScale from './NumericScale'
import Legend from '../Legend'

import styles from './Rating.module.css'
import type { FormData } from '../../schema'

interface Rating {
  type: 'emoji' | 'numeric'
  range: number
  withLegend?: boolean
  register: UseFormRegister<Partial<FormData>>
  name: keyof FormData
}

export default function Rating({ type, withLegend = false, ...props }: Rating) {
  const Scale = {
    emoji: EmojiScale,
    numeric: NumericScale
  }[type]

  return (
    <section className={clsx(styles.rating)}>
      <Scale {...props} />
      {withLegend && <Legend />}
    </section>
  )
}
