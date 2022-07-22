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
