import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  background: ${({ theme }) => theme.colors.background};
`

export const HeaderContent = styled.div`
  max-width: 1152px;
  padding: 2rem 1rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.75rem;
`

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  position: relative;
  padding: 0.5rem;
  border: none;
  outline: none;
  border-radius: 6px;

  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors['yellow-light']};

  cursor: pointer;
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.yellow};
  }

  > span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors['yellow-dark']};
  }
`
