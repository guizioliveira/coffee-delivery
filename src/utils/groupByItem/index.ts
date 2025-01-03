import { GroupedCoffee } from '@/reducers/reducer'

export function groupCoffeeById(items: GroupedCoffee[]): GroupedCoffee[] {
  return items.reduce<GroupedCoffee[]>((acc, coffee) => {
    const existingItem = acc.find((item) => item.id === coffee.id)

    if (existingItem) {
      existingItem.quantity += coffee.quantity
      existingItem.totalItemPrice += coffee.totalItemPrice
    } else {
      acc.push({
        ...coffee,
        quantity: coffee.quantity,
        totalItemPrice: coffee.totalItemPrice,
      })
    }

    return acc
  }, [])
}
