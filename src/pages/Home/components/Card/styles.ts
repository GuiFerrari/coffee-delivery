import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors['base-card']};
  padding: 1.25rem;
  border-radius: 6px 36px;
`

export const HeaderContainer = styled.div`
  margin-top: -40px;
`

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0.75rem 0 2rem;

  > h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    line-height: 130%;
    font-weight: 700;

    color: ${({ theme }) => theme.colors['base-subtitle']};
    text-align: center;

    margin: 1rem 0 0.5rem;
  }

  > p {
    font-size: 0.875rem;
    line-height: 130%;
    font-weight: 400;

    color: ${({ theme }) => theme.colors['base-label']};
    text-align: center;
  }
`

export const Tags = styled.div`
  display: flex;
  gap: 4px;

  > span {
    font-size: 0.625rem;
    line-height: 130%;
    font-weight: 700;

    color: ${({ theme }) => theme.colors['yellow-dark']};
    text-align: center;
    text-transform: uppercase;

    padding: 4px 8px;
    background: ${({ theme }) => theme.colors['yellow-light']};
    border-radius: 100px;
  }
`

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const Price = styled.span`
  font-size: 0.875rem;
  line-height: 130%;
  font-weight: 400;

  color: ${({ theme }) => theme.colors['base-text']};

  > strong {
    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
    line-height: 130%;
    font-weight: 800;
  }
`

export const FooterActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

export const Count = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  height: 2.375rem;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors['base-button']};

  > button {
    background: none;
    outline: none;
    border: none;

    cursor: pointer;
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
`
