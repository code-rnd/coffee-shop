import { Action, handleActions } from "redux-actions";
import { ExtraProductListMock, ProductListMock } from "../../mocks/productList";
import { productsActions } from "./products.actions";

import {
  ExtraProductModel,
  ProductModel,
  ProductsStateModel,
} from "./products.model";

const initialState: ProductsStateModel = {
  productList: [...ProductListMock],
  extraProductList: [...ExtraProductListMock],
  isLoading: false,
};

const setProdutcList = (
  state: ProductsStateModel,
  action: Action<ProductModel[]>
): ProductsStateModel => ({
  ...state,
  productList: action.payload,
  isLoading: false,
});

const setExtraProdutcList = (
  state: ProductsStateModel,
  action: Action<ExtraProductModel[]>
): ProductsStateModel => ({
  ...state,
  extraProductList: action.payload,
  isLoading: false,
});

const setStatusLoading = (
  state: ProductsStateModel,
  action: Action<boolean>
): ProductsStateModel => ({
  ...state,
  isLoading: action.payload,
});

const reduceMap: { [key: string]: any } = {
  [productsActions.SET_PRODUCT_LIST]: setProdutcList,
  [productsActions.SET_EXTRA_PRODUCT_LIST]: setExtraProdutcList,
  [productsActions.SET_STATUS_LOADING]: setStatusLoading,
};

export const productsReducer = handleActions(reduceMap, initialState);
