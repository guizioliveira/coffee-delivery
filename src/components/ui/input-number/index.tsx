import { useState } from 'react'
import { Input } from './styles'
import { Minus, Plus } from 'phosphor-react'

interface InputNumberProps {
  initialNumber?: number
  onChange?: (newQuantity: number) => void
  readyOnly?: boolean
}

export function InputNumber({
  initialNumber = 1,
  onChange,
  readyOnly = false,
}: InputNumberProps) {
  const [quantity, setQuantity] = useState<number>(initialNumber)

  function increaseQuantity() {
    const newQuantity = quantity + 1
    setQuantity(newQuantity)
    onChange?.(newQuantity)
  }

  function decreaseQuantity() {
    if (quantity <= 1) return

    const newQuantity = quantity - 1
    setQuantity(newQuantity)
    onChange?.(newQuantity)
  }

  return (
    <Input>
      <button onClick={decreaseQuantity} disabled={readyOnly}>
        <Minus size={14} weight="bold" />
      </button>
      {quantity}
      <button onClick={increaseQuantity} disabled={readyOnly}>
        <Plus size={14} weight="bold" />
      </button>
    </Input>
  )
}
