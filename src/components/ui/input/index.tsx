import { InputHTMLAttributes } from 'react'
import { Input as InputStyle } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return <InputStyle {...props} />
}
