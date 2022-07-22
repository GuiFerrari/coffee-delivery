import styled from 'styled-components'

export const SectionTitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;

  > div {
    > h4 {
      font-size: 1rem;
      line-height: 130%;
      font-weight: 400;

      color: ${({ theme }) => theme.colors['base-subtitle']};
    }

    > span {
      font-size: 0.875rem;
      line-height: 130%;
      font-weight: 400;

      color: ${({ theme }) => theme.colors['base-text']};
    }
  }
`
