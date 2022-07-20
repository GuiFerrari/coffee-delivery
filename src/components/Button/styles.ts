import styled, { css } from 'styled-components'

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'subtle' | 'cart'
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
  color: ${(props) => props.theme.white};

  cursor: pointer;
  transition: background-color 0.15s ease-in-out;

  background: ${(props) => props.theme.yellow};

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
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
      background: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple-dark']};

      &:hover {
        background: ${(props) => props.theme['purple-light-hover']};
      }
    `}

  ${(props) =>
    props.variant === 'cart' &&
    css`
      background: ${(props) => props.theme['yellow-light']};

      &:hover {
        background: ${(props) => props.theme.yellow};
      }
    `}
`
