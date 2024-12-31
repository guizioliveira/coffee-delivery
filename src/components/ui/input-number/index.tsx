import { useState } from 'react'
import { Input } from './styles'
import { Minus, Plus } from 'phosphor-react'

interface InputNumberProps {
  initialNumber?: number
  onChange?: (newQuantity: number) => void
  readOnly?: boolean
}

export function InputNumber({
  initialNumber = 1,
  onChange,
  readOnly = false,
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
      <button onClick={decreaseQuantity} disabled={readOnly}>
        <Minus size={14} weight="bold" />
      </button>
      {quantity}
      <button onClick={increaseQuantity} disabled={readOnly}>
        <Plus size={14} weight="bold" />
      </button>
    </Input>
  )
}
