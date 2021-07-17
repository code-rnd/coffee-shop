import { Dispatch } from "redux";
import {
  ActionFunction1,
  ActionFunction0,
  createAction,
  Action,
} from "redux-actions";
import { serviceApi } from "../../shared/http/api";
import { StoreModel } from "../store.model";
import { CardProductModel } from "./cardProduct.model";

class CardProductActions {
  readonly prefix: string = "CARD_PRODUCT";
  readonly SET_CARD_PRODUCT: string = `${this.prefix}.SET_CARD_PRODUCT`;
  readonly CLEAR_CARD_PRODUCT: string = `${this.prefix}.CLEAR_CARD_PRODUCT`;
  readonly SET_STATUS_LOADING: string = `${this.prefix}.SET_STATUS_LOADING`;

  setCardProduct: ActionFunction1<
    CardProductModel | undefined,
    Action<CardProductModel | undefined>
  > = createAction(this.SET_CARD_PRODUCT);

  clearCardProduct: ActionFunction0<Action<any>> = createAction(
    this.CLEAR_CARD_PRODUCT
  );

  setStatusLoading: ActionFunction1<boolean, Action<boolean>> = createAction(
    this.SET_STATUS_LOADING
  );

  fetchCardProduct = (id: number, redirectToProductList: () => any) => async (
    dispatch: Dispatch,
    getState: () => StoreModel
  ) => {
    dispatch(this.setStatusLoading(true));

    const { productList } = getState()?.products;
    const { extraProductList } = getState()?.products;

    try {
      const response = await serviceApi.getCardProduct(
        id,
        productList,
        extraProductList
      );

      if (!response) {
        redirectToProductList();
      }

      dispatch(this.setCardProduct(response));
    } catch (e) {
      window.confirm(
        `При попытке загрузить карточку продукта, произошла ошибка: ${e.message}`
      );
    } finally {
      dispatch(this.setStatusLoading(false));
    }
  };
}

export const cardProductActions = new CardProductActions();
