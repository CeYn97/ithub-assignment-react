import type { UseFormRegister } from "react-hook-form"
import type { FormData } from "../../schema"

interface RadioInput {
  register: UseFormRegister<Partial<FormData>>
  name: keyof FormData
  value: string | number
  icon: {
    src: string
    alt: string
  }
}

export default function RadioInput({ register, name, value, icon }: RadioInput) {
  return (
    <label key={`${name}__${value}`} htmlFor={`${name}__${value}`}>
      <img src={icon.src} alt={icon.alt} />
      <input type="radio" id={`name__${value}`} {...register(name)} value={value} />
    </label>
  )
}
