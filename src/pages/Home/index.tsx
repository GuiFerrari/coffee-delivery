import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

import {
  Container,
  Content,
  InformationsContainer,
  BadgesContainer,
  Badge,
  CoffeesContainer,
} from './styles'

import Image from '../../assets/imagem.png'

import { defaultTheme } from '../../styles/themes/default'

export function Home() {
  return (
    <Container>
      <Content>
        <InformationsContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <BadgesContainer>
            <Badge variant="orange">
              <div>
                <ShoppingCart
                  size={16}
                  weight="fill"
                  color={defaultTheme.white}
                />
              </div>
              <span>Compra simples e segura</span>
            </Badge>
            <Badge>
              <div>
                <Package size={16} weight="fill" color={defaultTheme.white} />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </Badge>
            <Badge variant="yellow">
              <div>
                <Timer size={16} weight="fill" color={defaultTheme.white} />
              </div>
              <span>Entrega rápida e rastreada</span>
            </Badge>
            <Badge variant="purple">
              <div>
                <Coffee size={16} weight="fill" color={defaultTheme.white} />
              </div>
              <span>O café chega fresquinho até você</span>
            </Badge>
          </BadgesContainer>
        </InformationsContainer>
        <div>
          <img src={Image} alt="Imagem de café" />
        </div>
      </Content>

      <CoffeesContainer>
        <h2>Nosso cafés</h2>
      </CoffeesContainer>
    </Container>
  )
}
