import { Coffee } from './reducer'

export enum ActionTypes {
  ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
}

interface AddNewCoffeeAction {
  type: ActionTypes.ADD_NEW_COFFEE
  payload: {
    newCoffee: Coffee
    quantity: number
  }
}

interface RemoveCoffeeAction {
  type: ActionTypes.REMOVE_COFFEE
  payload: {
    coffeeId: string
  }
}

export type CoffeeActions = AddNewCoffeeAction | RemoveCoffeeAction

export function addNewCoffeeAction(
  newCoffee: Coffee,
  quantity: number,
): AddNewCoffeeAction {
  return {
    type: ActionTypes.ADD_NEW_COFFEE,
    payload: {
      newCoffee,
      quantity,
    },
  }
}

export function removeCoffee(coffeeId: string): RemoveCoffeeAction {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      coffeeId,
    },
  }
}
