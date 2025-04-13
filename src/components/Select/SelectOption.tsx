import type { UseFormRegister } from 'react-hook-form'
import type { FormData } from '../../schema'
import styles from './Select.module.css'

interface SelectOption {
  option: string
  register: UseFormRegister<Partial<FormData>>
  name: keyof FormData
}

export default function SelectOption({ name, option, register }: SelectOption) {
  return (
    <label key={`${name}__${option}`} htmlFor={`${name}__${option}`} className={styles['select-option']}>
      {option}
      <input type="radio" id={`${name}__${option}`} {...register(name)} value={option} className={styles['select-input']} />
    </label>
  )
}
