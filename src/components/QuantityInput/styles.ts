import styled, { css } from 'styled-components'

interface QuantityInputContainerProps {
  size: 'medium' | 'small'
}

export const QuantityInputContainer = styled.div<QuantityInputContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  padding: 0.5rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors['base-button']};

  > button {
    background: none;
    outline: none;
    border: none;

    cursor: pointer;

    svg {
      color: ${({ theme }) => theme.colors.purple};
    }
  }

  > span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 21px;

    font-size: 1rem;
    line-height: 130%;
    font-weight: 400;

    color: ${({ theme }) => theme.colors['base-title']};
    text-align: center;
  }

  ${({ size }) =>
    size === 'small' &&
    css`
      padding: 0.3rem 0.5rem;
    `}
`
