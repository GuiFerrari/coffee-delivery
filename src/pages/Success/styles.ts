import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  max-width: 1152px;
  padding: 0 1rem;
  margin: 5rem auto 0;

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const SuccessHeader = styled.div`
  > h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;

    color: ${({ theme }) => theme.colors['yellow-dark']};
  }

  > span {
    font-size: 1.25rem;
    font-weight: 400;

    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`

export const OrderDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  min-width: 32rem;
  padding: 2.5rem;
  border-radius: 6px 36px;
  background: ${({ theme }) => theme.colors.background};

  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
    z-index: -1;
  }
`

export const BadgeText = styled.span`
  font-size: 1rem;
  font-weight: 400;

  color: ${({ theme }) => theme.colors['base-text']};
`
