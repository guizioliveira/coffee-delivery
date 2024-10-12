import { useState } from 'react'
import { Input } from './styles'
import { Minus, Plus } from 'phosphor-react'

interface InputNumberProps {
  initialNumber?: number
}

export function InputNumber({ initialNumber = 1 }: InputNumberProps) {
  const [quantity, setQuantity] = useState<number>(initialNumber)

  function increaseQuantity() {
    setQuantity((prevState) => prevState + 1)
  }

  function decreaseQuantity() {
    if (quantity <= 1) return

    setQuantity((prevState) => prevState - 1)
  }

  return (
    <Input>
      <button onClick={decreaseQuantity}>
        <Minus size={14} weight="bold" />
      </button>
      {quantity}
      <button onClick={increaseQuantity}>
        <Plus size={14} weight="bold" />
      </button>
    </Input>
  )
}
