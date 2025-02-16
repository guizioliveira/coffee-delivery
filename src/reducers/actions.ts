import { Coffee } from './reducer'

export enum ActionTypes {
  ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  SET_SHIPPING_FEE = 'SET_SHIPPING_FEE',
  CLEAR_CART = 'CLEAR_CART',
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

export interface ClearCartAction {
  type: ActionTypes.CLEAR_CART
}

export type CoffeeActions =
  | AddNewCoffeeAction
  | RemoveCoffeeAction
  | SetShippingFeeAction
  | ClearCartAction

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

export function cleanCart(): ClearCartAction {
  return {
    type: ActionTypes.CLEAR_CART,
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
