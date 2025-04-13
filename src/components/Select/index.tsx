import type { UseFormRegister } from 'react-hook-form'
import SelectOption from './SelectOption'

import type { FormData } from '../../schema'
import styles from './Select.module.css'

interface Select {
  options: string[]
  withOther?: boolean
  register: UseFormRegister<Partial<FormData>>
  name: keyof FormData
}

export default function Select({ options, name, register, withOther = false }: Select) {
  return (
    <section className={styles.select}>
      {options.map(option => <SelectOption key={`${name}__${option}`} name={name} option={option} register={register} />)}
    </section>
  )
}
