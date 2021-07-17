import { ActionFunction1, createAction, Action } from "redux-actions";
import { Dispatch } from "redux";

import { StoreModel } from "app/store/store.model";
import { ProductBasketModel } from "./shoppingBasket.model";

class ShoppingBasketActions {
  readonly prefix: string = "SHOPPING_BASKET";
  readonly SET_PRODUCT: string = `${this.prefix}.SET_PRODUCT`;
  readonly SET_EXTRA_PRODUCT: string = `${this.prefix}.SET_EXTRA_PRODUCT`;
  readonly REMOVE_PRODUCT: string = `${this.prefix}.REMOVE_PRODUCT`;
  readonly REMOVE_EXTRA_PRODUCT: string = `${this.prefix}.REMOVE_EXTRA_PRODUCT`;
  readonly SET_STATUS_LOADING: string = `${this.prefix}.SET_STATUS_LOADING`;

  setProduct: ActionFunction1<
    ProductBasketModel[],
    Action<ProductBasketModel[]>
  > = createAction(this.SET_PRODUCT);

  setExtraProduct: ActionFunction1<
    ProductBasketModel[],
    Action<ProductBasketModel[]>
  > = createAction(this.SET_EXTRA_PRODUCT);

  removeProduct: ActionFunction1<
    ProductBasketModel[],
    Action<ProductBasketModel[]>
  > = createAction(this.REMOVE_PRODUCT);

  removeExtraProduct: ActionFunction1<
    ProductBasketModel[],
    Action<ProductBasketModel[]>
  > = createAction(this.REMOVE_EXTRA_PRODUCT);

  setStatusLoading: ActionFunction1<boolean, Action<boolean>> = createAction(
    this.SET_STATUS_LOADING
  );

  sendBasket: any = () => async (
    dispatch: Dispatch,
    getState: () => StoreModel
  ) => {
    const { list } = getState().shoppingBasket;
    dispatch(this.setStatusLoading(true));
    try {
    } catch (e) {
      window.confirm(
        `При попытке заказать продукты, произошла ошибка: ${e.message}`
      );
    } finally {
      dispatch(this.setStatusLoading(false));
    }
  };
}

export const shoppingBasketActions = new ShoppingBasketActions();
