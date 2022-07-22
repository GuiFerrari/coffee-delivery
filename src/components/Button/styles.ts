import styled, { css } from 'styled-components'

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'subtle' | 'cart' | 'cart-secondary'
}

export const Container = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  padding: 0.5rem;
  border: none;
  outline: none;
  border-radius: 6px;

  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.white};

  cursor: pointer;
  transition: background-color 0.15s ease-in-out;

  background: ${({ theme }) => theme.colors.yellow};

  &:hover {
    background: ${({ theme }) => theme.colors['yellow-dark']};
  }

  ${(props) =>
    props.variant === 'primary' &&
    css`
      min-width: 132px;
      height: 38px;
    `}

  ${(props) =>
    props.variant === 'secondary' &&
    css`
      background: ${({ theme }) => theme.colors['purple-light']};
      color: ${({ theme }) => theme.colors['purple-dark']};

      &:hover {
        background: ${({ theme }) => theme.colors['purple-light-hover']};
      }
    `}

  ${(props) =>
    props.variant === 'cart' &&
    css`
      background: ${({ theme }) => theme.colors['yellow-light']};

      &:hover {
        background: ${({ theme }) => theme.colors.yellow};
      }
    `}

  ${(props) =>
    props.variant === 'cart-secondary' &&
    css`
      background: ${({ theme }) => theme.colors['purple-dark']};

      &:hover {
        background: ${({ theme }) => theme.colors.purple};
      }
    `}
`
