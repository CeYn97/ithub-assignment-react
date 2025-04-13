import styles from './Avatar.module.css'

interface Avatar {
  src: string
}

export default function Avatar({ src }: Avatar) {
  return (
    <img src={src} alt="avatar" className={styles.avatar} />
  )
}
