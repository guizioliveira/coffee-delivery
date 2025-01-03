import { forwardRef, InputHTMLAttributes } from 'react'
import {
  RadioContainer,
  RadioHiddenElement,
  RadioGroup,
  RadioContent,
} from './styles'

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {}

export const RadioButton = forwardRef<HTMLInputElement, RadioProps>(
  function radioBase({ children, ...props }, ref) {
    return (
      <RadioContainer>
        <RadioHiddenElement ref={ref} type="radio" {...props} />
        <RadioContent>{children}</RadioContent>
      </RadioContainer>
    )
  },
)

export { RadioGroup }
