import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Button as StyledButton } from './styles'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: ReactNode
}

export function Button({
  variant = 'primary',
  children,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <StyledButton variant={variant} type={type} {...rest}>
      {children}
    </StyledButton>
  )
}
