import { produce } from 'immer'
import { ActionTypes } from './actions'

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
  totalPrice: number
}

export function coffeeReducer(
  state: { coffees: GroupedCoffee[] },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: { type: string; payload: any },
) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE:
      return produce(state, (draft) => {
        const existingItem = draft.coffees.find(
          (coffee) => coffee.id === action.payload.newCoffee.id,
        )

        if (existingItem) {
          existingItem.quantity += action.payload.quantity
          existingItem.totalPrice = existingItem.quantity * existingItem.price
        } else {
          draft.coffees.push({
            ...action.payload.newCoffee,
            quantity: action.payload.quantity,
            totalPrice:
              action.payload.newCoffee.price * action.payload.quantity,
          })
        }
      })
    case ActionTypes.REMOVE_COFFEE:
      return produce(state, (draft) => {
        draft.coffees = draft.coffees.filter(
          (coffee) => coffee.id !== action.payload.coffeeId,
        )
      })
    default:
      return state
  }
}
