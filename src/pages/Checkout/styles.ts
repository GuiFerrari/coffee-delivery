import styled from 'styled-components'

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

export const OrderBody = styled.div`
  margin: 2rem 0 0;
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
`
