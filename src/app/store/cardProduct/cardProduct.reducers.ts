import { Action, handleActions } from "redux-actions";
import { cardProductActions } from "./cardProduct.actions";
import { CardProductModel, CardProductStateModel } from "./cardProduct.model";

const initialState: CardProductStateModel = {
  card: undefined,
  isLoading: false,
};

const setCardProduct = (
  state: CardProductStateModel,
  action: Action<CardProductModel>
): CardProductStateModel => ({
  ...state,
  card: action.payload,
  isLoading: false,
});

const clearCardProduct = (
  state: CardProductStateModel
): CardProductStateModel => ({
  ...state,
  card: undefined,
  isLoading: false,
});

const setStatusLoading = (
  state: CardProductStateModel,
  action: Action<boolean>
): CardProductStateModel => ({
  ...state,
  isLoading: action.payload,
});

const reduceMap: { [key: string]: any } = {
  [cardProductActions.SET_CARD_PRODUCT]: setCardProduct,
  [cardProductActions.CLEAR_CARD_PRODUCT]: clearCardProduct,
  [cardProductActions.SET_STATUS_LOADING]: setStatusLoading,
};

export const cardProductsReducer = handleActions(reduceMap, initialState);
