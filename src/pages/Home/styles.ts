import styled, { css } from 'styled-components'

interface BadgeProps {
  variant?: 'orange' | 'yellow' | 'purple'
}

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
`

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 56px;

  margin: 5.875rem 0 6.75rem;
`

export const InformationsContainer = styled.div`
  > h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    line-height: 130%;
    font-weight: 800;

    color: ${(props) => props.theme['base-title']};
  }

  > p {
    font-size: 1.25rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
    margin: 1rem 0 0;
  }
`

export const BadgesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 12px;

  margin: 4.125rem 0 0;
`

export const Badge = styled.div<BadgeProps>`
  display: flex;
  align-items: center;
  gap: 12px;

  > div {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${(props) => props.theme['base-text']};

    ${(props) =>
      props.variant === 'orange' &&
      css`
        background: ${(props) => props.theme['yellow-dark']};
      `}

    ${(props) =>
      props.variant === 'yellow' &&
      css`
        background: ${(props) => props.theme.yellow};
      `}

    ${(props) =>
      props.variant === 'purple' &&
      css`
        background: ${(props) => props.theme.purple};
      `}
  }

  > span {
    line-height: 130%;
  }
`

export const CoffeesContainer = styled.div`
  margin: 2rem 0;

  > h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    line-height: 130%;
    font-weight: 800;
  }
`
