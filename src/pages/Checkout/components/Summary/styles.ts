import styled from 'styled-components'

export const SummaryContainer = styled.div`
  background: ${({ theme }) => theme.colors['base-card']};
  padding: 2.5rem 1.25rem;
  border-radius: 6px 36px;
`

export const ConfirmButton = styled.button`
  width: 100%;
  height: 2.875rem;
  border: none;
  border-radius: 6px;
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.colors.yellow};

  font-size: 0.875rem;
  line-height: 160%;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};

  cursor: pointer;
  transition: 0.25s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors['yellow-dark']};
  }
`
