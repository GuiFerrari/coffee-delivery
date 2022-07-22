import styled, { css } from 'styled-components'

interface PaymentOptionButtonProps {
  active?: boolean
}

export const Container = styled.main`
  max-width: 1152px;
  padding: 0 1rem;
  margin: 2.5rem auto 2rem;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 32px;
`

export const OrderContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 12px;

  > h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    line-height: 130%;

    margin: 0 0 1rem;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`

export const OrderBase = styled.div`
  background: ${({ theme }) => theme.colors['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
`

export const OrderHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;

  > div {
    > h4 {
      font-size: 1rem;
      line-height: 130%;
      font-weight: 400;

      color: ${({ theme }) => theme.colors['base-subtitle']};
    }

    > span {
      font-size: 0.875rem;
      line-height: 130%;
      font-weight: 400;

      color: ${({ theme }) => theme.colors['base-text']};
    }
  }
`

export const OrderBody = styled.div`
  margin: 2rem 0 0;
`

export const PaymentOptionsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
`

export const PaymentOptionButton = styled.button<PaymentOptionButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  border: 1px solid transparent;
  outline: none;
  padding: 1.25rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors['base-button']};

  font-size: 0.75rem;
  line-height: 130%;
  font-weight: 400;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors['base-text']};

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors['base-hover']};
  }

  ${(props) =>
    props.active &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.purple};
      background: ${({ theme }) => theme.colors['purple-light']};

      &:hover {
        background: ${({ theme }) => theme.colors['purple-light']};
      }
    `}
`

export const SummaryContainer = styled.div`
  min-width: 28rem;

  > h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    line-height: 130%;

    margin: 0 0 1rem;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  > div {
    background: ${({ theme }) => theme.colors['base-card']};
    padding: 1.25rem;
    border-radius: 6px 36px;
  }
`
