import { ReactNode } from 'react'

import { BadgeContainer, IconContainer } from './styles'

interface BadgeProps {
  icon: ReactNode
  text: string | ReactNode
  variant?: 'orange' | 'yellow' | 'purple'
}

export function Badge({ icon, text, variant }: BadgeProps) {
  return (
    <BadgeContainer>
      <IconContainer variant={variant}>{icon}</IconContainer>
      {typeof text === 'string' ? <span>{text}</span> : text}
    </BadgeContainer>
  )
}
