import styled from 'styled-components'

export const PaymentMethodsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  > p {
    font-size: 0.875rem;
    line-height: 130%;
    font-weight: 400;
    color: ${({ theme }) => theme.colors['base-error']};

    grid-column: span 3;
  }
`
