import tradicionalCoffee from '@/assets/products/tradicional.svg'
import { ShoppingCart } from 'phosphor-react'
import {
  CardCheckout,
  CardContainer,
  CardContent,
  CardImage,
  CardLabel,
  CardTitle,
  Price,
  StateButton,
  Tag,
} from './styled'
import { InputNumber } from '@/components/ui/input-number'
import { CartAction } from '@/components/ui/input-number/styles'

export function Card() {
  return (
    <CardContainer>
      <CardContent>
        <CardImage>
          <img src={tradicionalCoffee} alt="" />
        </CardImage>
        <Tag>Tradicional</Tag>
        <CardTitle>Expresso Tradicional</CardTitle>
        <CardLabel>
          O tradicional café feito com água quente e grãos moídos
        </CardLabel>
      </CardContent>

      <CardCheckout>
        <Price>9,90</Price>
        <CartAction>
          <InputNumber />
          <StateButton>
            <ShoppingCart size={22} weight="fill" />
          </StateButton>
        </CartAction>
      </CardCheckout>
    </CardContainer>
  )
}
