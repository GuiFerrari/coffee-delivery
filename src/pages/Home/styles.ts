import { rgba } from 'polished'
import styled from 'styled-components'

import introBackground from '../../../public/intro-background.png'

export const Container = styled.main``

export const IntroContainer = styled.div`
  width: 100%;
  height: 34rem;
  background: ${({ theme }) => `url(${introBackground}) no-repeat center,
    linear-gradient(
      0deg,
      ${theme.colors.white} 0%,
      ${rgba(theme.colors.background, 0.2)} 50%,
      ${theme.colors.background} 100%
    )
  `};
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 56px;

  max-width: 1152px;

  @media (max-width: 1024px) {
    > div {
      &:last-of-type {
        display: none;
      }
    }
  }
`

export const InformationsContainer = styled.div`
  > h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    line-height: 130%;
    font-weight: 800;

    color: ${({ theme }) => theme.colors['base-title']};
  }

  > p {
    font-size: 1.25rem;
    line-height: 130%;

    color: ${({ theme }) => theme.colors['base-subtitle']};
    margin: 1rem 0 0;
  }

  @media (max-width: 1024px) {
    > h1 {
      text-align: center;
    }

    > p {
      text-align: center;
    }
  }
`

export const BadgesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 12px;

  margin: 4.125rem 0 0;
`

export const CoffeesContainer = styled.div`
  max-width: 1152px;
  margin: 2rem auto;

  > h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    line-height: 130%;
    font-weight: 800;
  }
`

export const CoffeesList = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 40px;
  column-gap: 32px;

  margin: 3.375rem 0 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, 313px);
  }
`
