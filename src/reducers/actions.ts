import { Coffee } from './reducer'

export enum ActionTypes {
  ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  SET_SHIPPING_FEE = 'SET_SHIPPING_FEE',
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

export interface SetShippingFeeAction {
  type: ActionTypes.SET_SHIPPING_FEE
  payload: {
    shippingFee: number
  }
}

export type CoffeeActions =
  | AddNewCoffeeAction
  | RemoveCoffeeAction
  | SetShippingFeeAction

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

export function setShippingFeeAction(
  shippingFee: number,
): SetShippingFeeAction {
  return {
    type: ActionTypes.SET_SHIPPING_FEE,
    payload: {
      shippingFee,
    },
  }
}
