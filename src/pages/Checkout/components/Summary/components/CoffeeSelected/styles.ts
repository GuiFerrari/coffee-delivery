import styled from 'styled-components'

export const CoffeeSelectedContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};
  padding: 1.5rem;
  gap: 1.25rem;

  > p {
    align-self: flex-start;

    font-size: 1rem;
    line-height: 130%;
    font-weight: 700;
    color: ${({ theme }) => theme.colors['base-text']};
  }
`

export const CoffeeDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  > img {
    width: 4rem;
    height: 4rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    > h2 {
      font-size: 1rem;
      line-height: 130%;
      font-weight: 400;
      color: ${({ theme }) => theme.colors['base-subtitle']};
    }
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 2rem;
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  height: 100%;
  border: none;
  border-radius: 6px;
  padding: 0 0.5rem;
  background: ${({ theme }) => theme.colors['base-button']};

  font-size: 0.75rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors['base-text']};

  cursor: pointer;
  transition: 0.25s;

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }

  &:hover {
    background: ${({ theme }) => theme.colors['base-hover']};
  }
`
