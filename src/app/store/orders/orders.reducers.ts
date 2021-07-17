import { Action, handleActions } from "redux-actions";

import { ordersActions } from "./orders.actions";

import { OrderModel, OrdersStateModel } from "./orders.model";

const initialState: OrdersStateModel = {
  list: [],
  isLoading: false,
};

const setOrderList = (
  state: OrdersStateModel,
  action: Action<OrderModel[]>
): OrdersStateModel => ({
  ...state,
  list: action.payload,
  isLoading: false,
});

const setStatusLoading = (
  state: OrdersStateModel,
  action: Action<boolean>
): OrdersStateModel => ({
  ...state,
  isLoading: action.payload,
});

const reduceMap: { [key: string]: any } = {
  [ordersActions.SET_ORDER_LIST]: setOrderList,
  [ordersActions.SET_STATUS_LOADING]: setStatusLoading,
};

export const ordersReducer = handleActions(reduceMap, initialState);
