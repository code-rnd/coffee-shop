import { ActionFunction1, createAction, Action } from "redux-actions";
import { Dispatch } from "redux";
import { ExtraProductModel, ProductModel } from "./products.model";
import { serviceApi } from "../../shared/http/api";

class ProductsActions {
  readonly prefix: string = "PRODUCTS";
  readonly SET_PRODUCT_LIST: string = `${this.prefix}.SET_PRODUCT_LIST`;
  readonly SET_EXTRA_PRODUCT_LIST: string = `${this.prefix}.SET_EXTRA_PRODUCT_LIST`;
  readonly SET_STATUS_LOADING: string = `${this.prefix}.SET_STATUS_LOADING`;

  setProductList: ActionFunction1<
    ProductModel[],
    Action<ProductModel[]>
  > = createAction(this.SET_PRODUCT_LIST);

  setExtraProductList: ActionFunction1<
    ExtraProductModel[],
    Action<ExtraProductModel[]>
  > = createAction(this.SET_EXTRA_PRODUCT_LIST);

  setStatusLoading: ActionFunction1<boolean, Action<boolean>> = createAction(
    this.SET_STATUS_LOADING
  );

  fetchProductList = () => async (dispatch: Dispatch) => {
    dispatch(this.setStatusLoading(true));

    try {
      const response = await serviceApi.getProductList();
      const data = response.data;
      dispatch(this.setProductList(data));
    } catch (e) {
      window.confirm(
        `При попытке загрузить список продуктов, произошла ошибка: ${e.message}`
      );
    } finally {
      dispatch(this.setStatusLoading(false));
    }
  };

  fetchExtraProductList = () => async (dispatch: Dispatch) => {
    dispatch(this.setStatusLoading(true));

    try {
      const response = await serviceApi.getExtraProductList();
      const data = response.data;
      dispatch(this.setExtraProductList(data));
    } catch (e) {
      window.confirm(
        `При попытке загрузить список дополнительных продуктов, произошла ошибка: ${e.message}`
      );
    } finally {
      dispatch(this.setStatusLoading(false));
    }
  };
}

export const productsActions = new ProductsActions();
