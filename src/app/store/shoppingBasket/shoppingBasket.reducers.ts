import { Action, handleActions } from "redux-actions";
import { shoppingBasketActions } from "./shoppingBasket.actions";
import {
  ProductBasketModel,
  ShoppingBasketStateModel,
} from "./shoppingBasket.model";

const initialState: ShoppingBasketStateModel = {
  list: [],
  isLoading: false,
};

const setProduct = (
  state: ShoppingBasketStateModel,
  action: Action<ProductBasketModel[]>
): ShoppingBasketStateModel => ({
  ...state,
  list: [...action.payload],
  isLoading: false,
});

const setExtraProduct = (
  state: ShoppingBasketStateModel,
  action: Action<ProductBasketModel[]>
): ShoppingBasketStateModel => ({
  ...state,
  list: [...action.payload],
  isLoading: false,
});

const removeProduct = (
  state: ShoppingBasketStateModel,
  action: Action<ProductBasketModel[]>
): ShoppingBasketStateModel => ({
  ...state,
  list: [...action.payload],
  isLoading: false,
});

const removeExtraProduct = (
  state: ShoppingBasketStateModel,
  action: Action<ProductBasketModel[]>
): ShoppingBasketStateModel => ({
  ...state,
  list: [...action.payload],
  isLoading: false,
});

const setStatusLoading = (
  state: ShoppingBasketStateModel,
  action: Action<boolean>
): ShoppingBasketStateModel => ({
  ...state,
  isLoading: action.payload,
});

const reduceMap: { [key: string]: any } = {
  [shoppingBasketActions.SET_PRODUCT]: setProduct,
  [shoppingBasketActions.SET_EXTRA_PRODUCT]: setExtraProduct,
  [shoppingBasketActions.SET_STATUS_LOADING]: setStatusLoading,
  [shoppingBasketActions.REMOVE_PRODUCT]: removeProduct,
  [shoppingBasketActions.REMOVE_EXTRA_PRODUCT]: removeExtraProduct,
};

export const shoppingBasketReducer = handleActions(reduceMap, initialState);
