import styled from 'styled-components'

export const InputStyleContainer = styled.input`
  height: 2.625rem;
  background: ${({ theme }) => theme.colors['base-input']};
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  border-radius: 6px;

  transition: 0.25s;

  font-size: 0.875rem;
  line-height: 130%;
  font-weight: 400;
  color: ${({ theme }) => theme.colors['base-text']};

  &:focus {
    border-color: ${({ theme }) => theme.colors['yellow-dark']};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }
`
