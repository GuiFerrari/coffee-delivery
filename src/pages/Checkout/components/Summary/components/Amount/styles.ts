import styled from 'styled-components'

export const AmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const AmountItem = styled.span`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors['base-text']};
`

export const AmountTotal = styled.span`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors['base-subtitle']};
`
