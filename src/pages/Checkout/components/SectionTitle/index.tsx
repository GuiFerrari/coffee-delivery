import { ReactNode } from 'react'

import { SectionTitleContainer } from './styles'

interface SectionTitleProps {
  title: string
  subtitle: string
  icon: ReactNode
}

export function SectionTitle({ title, subtitle, icon }: SectionTitleProps) {
  return (
    <SectionTitleContainer>
      {icon}

      <div>
        <h4>{title}</h4>
        <span>{subtitle}</span>
      </div>
    </SectionTitleContainer>
  )
}
