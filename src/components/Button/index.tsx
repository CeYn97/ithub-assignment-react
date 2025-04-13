import clsx from 'clsx'

import styles from './Button.module.css'
import useFormStore from '../../store/useFormStore'
import closeIcon from '../../assets/icons/close.svg'

interface Button {
  type: 'close' | 'submit' | 'back' | 'next' | 'start'
}

function ButtonClose() {
  const setFormStep = useFormStore(store => store.setStep)
  const resetFormData = useFormStore(store => store.resetData)
  return (
    <button type="reset" className={clsx(styles.button, styles['button-icon'])} onClick={() => {
      resetFormData()
      setFormStep(1)
    }}>
      <img src={closeIcon} alt="close" />
    </button>
  )
}

function ButtonNext() {
  return (
    <button type="submit" className={clsx(styles.button, styles['button-primary'])}>
      Далее
    </button>
  )
}

function ButtonBack() {
  const step = useFormStore(store => store.step)
  const setStep = useFormStore(store => store.setStep)

  return (
    <button type="button" className={clsx(styles.button, styles['button-secondary'])} onClick={() => setStep(step - 1)}>
      Назад
    </button>
  )
}

function ButtonStart() {
  const setStep = useFormStore(store => store.setStep)

  return (
    <button type="button" className={clsx(styles.button, styles['button-full'], styles['button-secondary'])} onClick={() => setStep(2)}>
      Оставить фидбек
    </button>
  )
}

export default function Button({ type }: Button) {
  return {
    'close': <ButtonClose />,
    'submit': <ButtonClose />,
    'back': <ButtonBack />,
    'next': <ButtonNext />,
    'start': <ButtonStart />
  }[type]
}
