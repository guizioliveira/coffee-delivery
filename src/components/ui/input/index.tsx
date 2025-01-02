import { forwardRef, InputHTMLAttributes } from 'react'
import { ErrorMessage, InputContainer, Input as InputStyle } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function InputBase({ error, ...props }, ref) {
    return (
      <InputContainer>
        <InputStyle ref={ref} hasError={!!error} {...props} />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </InputContainer>
    )
  },
)
