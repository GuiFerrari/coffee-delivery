import styled, { css } from 'styled-components'

interface IconContainerProps {
  variant?: 'orange' | 'yellow' | 'purple'
}

export const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  > span {
    line-height: 130%;
  }
`

export const IconContainer = styled.div<IconContainerProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors['base-text']};

  svg {
    color: ${({ theme }) => theme.colors.white};
  }

  ${(props) =>
    props.variant === 'orange' &&
    css`
      background: ${({ theme }) => theme.colors['yellow-dark']};
    `}

  ${(props) =>
    props.variant === 'yellow' &&
    css`
      background: ${({ theme }) => theme.colors.yellow};
    `}

      ${(props) =>
    props.variant === 'purple' &&
    css`
      background: ${({ theme }) => theme.colors.purple};
    `}
`
