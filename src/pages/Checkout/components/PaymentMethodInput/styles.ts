import styled, { css } from 'styled-components'

export const PaymentMethodInputContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${({ theme }) =>
      css`
        border: 1px solid ${theme.colors.purple};
        background: ${theme.colors['purple-light']};

        &:hover {
          background: ${theme.colors['purple-light']};
        }
      `}
  }
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;

  height: 3rem;
  border: 1px solid transparent;
  outline: none;
  padding: 0 1rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors['base-button']};

  font-size: 0.75rem;
  line-height: 130%;
  font-weight: 400;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors['base-text']};

  cursor: pointer;
  user-select: none;
  transition: 0.25s;

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }

  &:hover {
    background: ${({ theme }) => theme.colors['base-hover']};
  }
`
