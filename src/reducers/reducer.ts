import { produce } from 'immer'
import { ActionTypes, CoffeeActions } from './actions'

export type Coffee = {
  id: string
  name: string
  types: string[]
  price: number
  description: string
  imageUrl: string
}

export type GroupedCoffee = Coffee & {
  quantity: number
  totalItemPrice: number
}

function calculateTotalPrice(quantity: number, price: number): number {
  return parseFloat((quantity * price).toFixed(2))
}

export function coffeeReducer(
  state: { coffees: GroupedCoffee[]; shippingFee: number },
  action: CoffeeActions,
) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE:
      return produce(state, (draft) => {
        const existingItem = draft.coffees.find(
          (coffee) => coffee.id === action.payload.newCoffee.id,
        )

        if (existingItem) {
          existingItem.quantity += action.payload.quantity
          existingItem.totalItemPrice = calculateTotalPrice(
            existingItem.quantity,
            existingItem.price,
          )
        } else {
          draft.coffees.push({
            ...action.payload.newCoffee,
            quantity: action.payload.quantity,
            totalItemPrice: calculateTotalPrice(
              action.payload.quantity,
              action.payload.newCoffee.price,
            ),
          })
        }
      })

    case ActionTypes.REMOVE_COFFEE:
      return produce(state, (draft) => {
        draft.coffees = draft.coffees.filter(
          (coffee) => coffee.id !== action.payload.coffeeId,
        )
      })

    case ActionTypes.SET_SHIPPING_FEE:
      return produce(state, (draft) => {
        draft.shippingFee = action.payload.shippingFee
      })

    default:
      return state
  }
}
