import { InputNumber } from '@/components/ui/input-number'
import {
  Container,
  ItemInformation,
  Image,
  Controller,
  Quantity,
  Price,
} from './styled'

import coffee from '@/assets/products/tradicional.svg'
import { Button } from '@/components/ui/button'
import { Trash } from 'phosphor-react'

export function CartItem() {
  return (
    <Container>
      <ItemInformation>
        <Image src={coffee} alt="café" />

        <Controller>
          <text>Expresso Tradicional</text>
          <Quantity>
            <InputNumber />
            <Button variant="secondary">
              <Trash size={16} />
              Remover
            </Button>
          </Quantity>
        </Controller>
      </ItemInformation>

      <Price>9,90</Price>
    </Container>
  )
}
