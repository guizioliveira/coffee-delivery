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
  TagGrid,
  Tag,
  CartAction,
} from './styled'
import { InputNumber } from '@/components/ui/input-number'
import { Coffee } from '@/types'

interface CardProps {
  data: Coffee
}

export function Card({ data }: CardProps) {
  const { name, description, price, types, imageUrl } = data

  return (
    <CardContainer>
      <CardContent>
        <CardImage>
          <img src={imageUrl} alt="" />
        </CardImage>
        <TagGrid>
          {types.map((type) => (
            <Tag key={type}>{type}</Tag>
          ))}
        </TagGrid>
        <CardTitle>{name}</CardTitle>
        <CardLabel>{description}</CardLabel>
      </CardContent>

      <CardCheckout>
        <Price>
          {price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
        </Price>
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
