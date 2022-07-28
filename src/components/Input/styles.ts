import styled, { css } from 'styled-components'

interface InputStyleContainerProps {
  hasError: boolean
}

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  > p {
    font-size: 0.875rem;
    line-height: 130%;
    font-weight: 400;
    color: ${({ theme }) => theme.colors['base-error']};
  }
`

export const InputStyleContainer = styled.div<InputStyleContainerProps>`
  height: 2.625rem;
  background: ${({ theme }) => theme.colors['base-input']};
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  border-radius: 6px;

  transition: 0.25s;

  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors['yellow-dark']};
  }

  ${({ theme, hasError }) =>
    hasError &&
    css`
      border-color: ${theme.colors['base-error']};
    `}
`

export const InputStyled = styled.input`
  flex: 1;
  height: 100%;
  background: none;
  border: none;
  padding: 0 0.75rem;

  font-size: 0.875rem;
  line-height: 130%;
  font-weight: 400;
  color: ${({ theme }) => theme.colors['base-text']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }
`

export const RightText = styled.p`
  font-size: 0.75rem;
  margin-right: 0.75rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors['base-label']};
`
