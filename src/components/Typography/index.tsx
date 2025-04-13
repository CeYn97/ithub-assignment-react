import clsx from 'clsx'
import styles from './Typography.module.css'

type Theme = 'dark' | 'light'

interface Typography {
  type: 'title' | 'subtitle' | 'caption'
  text: string
  theme?: Theme
}

interface TypographyFlavour extends Omit<Typography, 'type'> { }

export function Title({ text, theme = 'dark' }: TypographyFlavour) {
  return <h2 className={clsx(styles[theme], styles.title)}>{text}</h2>
}

export function Subtitle({ text, theme = 'dark' }: TypographyFlavour) {
  return <p className={clsx(styles[theme], styles.subtitle)}>{text}</p>
}

export function Caption({ text, theme = 'dark' }: TypographyFlavour) {
  return <p className={clsx(styles[theme], styles.caption)}>{text}</p>
}

export default function Typography({ type, text, theme = 'dark' }: Typography) {
  const Component = {
    title: Title,
    subtitle: Subtitle,
    caption: Caption
  }[type]

  return <Component text={text} theme={theme} />
}
