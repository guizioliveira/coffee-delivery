import { Button, InputNumber } from '@/components/ui'
import { useStore } from '@/contexts/StoreContext'
import { GroupedCoffee } from '@/reducers/reducer'
import { formatPrice } from '@/utils/formatPrice'
import { Trash } from 'phosphor-react'
import {
  Container,
  Controller,
  Image,
  ItemInformation,
  Price,
  Quantity,
} from './styled'

interface CartItemProps {
  item: GroupedCoffee
}

export function CartItem({ item }: CartItemProps) {
  const { removeItem } = useStore()

  if (!item) return

  return (
    <Container>
      <ItemInformation>
        <Image src={item.imageUrl} alt="café" />

        <Controller>
          {item.name}
          <Quantity>
            <InputNumber readOnly initialNumber={item.quantity} />
            <Button variant="secondary" onClick={() => removeItem(item.id)}>
              <Trash size={16} />
              Remover
            </Button>
          </Quantity>
        </Controller>
      </ItemInformation>

      <Price>{formatPrice(item.totalItemPrice)}</Price>
    </Container>
  )
}
