import { ReactNode } from 'react'

import { Container } from './styles'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'subtle' | 'cart' | 'cart-secondary'
}

export function Button({ children, variant = 'primary' }: ButtonProps) {
  return <Container variant={variant}>{children}</Container>
}
