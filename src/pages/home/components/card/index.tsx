import { InputNumber } from '@/components/ui'
import { useStore } from '@/contexts/StoreContext'
import { Coffee } from '@/reducers/reducer'
import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import {
  CardCheckout,
  CardContainer,
  CardContent,
  CardImage,
  CardLabel,
  CardTitle,
  CartAction,
  Price,
  StateButton,
  Tag,
  TagGrid,
} from './styled'
interface CardProps {
  data: Coffee
}

export function Card({ data }: CardProps) {
  const [quantity, setQuantity] = useState<number>(1)

  const { name, description, price, types, imageUrl } = data
  const { addNewItem } = useStore()

  const handleAddToCart = () => {
    addNewItem(data, quantity)
  }

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
          <InputNumber onChange={(newQuantity) => setQuantity(newQuantity)} />
          <StateButton onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </StateButton>
        </CartAction>
      </CardCheckout>
    </CardContainer>
  )
}
