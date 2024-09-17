import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  Grid,
  GridContent,
  HeroContainer,
  HighlightBox,
  Icon,
  TextContent,
} from './styles'
import coffeeHighLight from '@assets/coffee.png'

export function Hero() {
  return (
    <HeroContainer>
      <TextContent>
        <HighlightBox>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </HighlightBox>
        <Grid>
          <GridContent>
            <Icon bgColor="yellow-dark">
              <ShoppingCart weight="fill" />
            </Icon>
            Compra simples e segura
          </GridContent>

          <GridContent>
            <Icon bgColor="gray">
              <Package weight="fill" />
            </Icon>
            Embalagem mantém o café intacto
          </GridContent>

          <GridContent>
            <Icon bgColor="yellow">
              <Timer weight="fill" />
            </Icon>
            Entrega rápida e rastreada
          </GridContent>

          <GridContent>
            <Icon bgColor="purple">
              <Coffee weight="fill" />
            </Icon>
            O café chega fresquinho até você
          </GridContent>
        </Grid>
      </TextContent>
      <img
        src={coffeeHighLight}
        alt="Um copo de café rodeado de grãos de café"
        width={476}
      />
    </HeroContainer>
  )
}
