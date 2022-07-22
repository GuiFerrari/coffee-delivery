import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

import {
  Container,
  IntroContainer,
  IntroContent,
  InformationsContainer,
  BadgesContainer,
  CoffeesContainer,
  CoffeesList,
} from './styles'

import { Card } from './components/Card'
import { Badge } from '../../components/Badge'

import { coffess } from '../../api/coffees'

export function HomePage() {
  return (
    <Container>
      <IntroContainer>
        <IntroContent>
          <InformationsContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>

            <BadgesContainer>
              <Badge
                variant="orange"
                icon={<ShoppingCart size={16} weight="fill" />}
                text="Compra simples e segura"
              />
              <Badge
                icon={<Package size={16} weight="fill" />}
                text="Embalagem mantém o café intacto"
              />
              <Badge
                variant="yellow"
                icon={<Timer size={16} weight="fill" />}
                text="Entrega rápida e rastreada"
              />
              <Badge
                variant="purple"
                icon={<Coffee size={16} weight="fill" />}
                text="O café chega fresquinho até você"
              />
            </BadgesContainer>
          </InformationsContainer>
          <div>
            <img src="/imagem.png" alt="Imagem de café" />
          </div>
        </IntroContent>
      </IntroContainer>

      <CoffeesContainer>
        <h2>Nosso cafés</h2>

        <CoffeesList>
          {coffess.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </CoffeesList>
      </CoffeesContainer>
    </Container>
  )
}
