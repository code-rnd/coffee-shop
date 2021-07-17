import { ActionFunction1, createAction, Action } from "redux-actions";
import { Dispatch } from "redux";
import { OrderModel } from "./orders.model";
import { serviceApi } from "../../shared/http/api";

class OrdersActions {
  readonly prefix: string = "ORDERS";
  readonly SET_ORDER_LIST: string = `${this.prefix}.SET_ORDER_LIST`;
  readonly SET_STATUS_LOADING: string = `${this.prefix}.SET_STATUS_LOADING`;

  setOrderList: ActionFunction1<
    OrderModel[],
    Action<OrderModel[]>
  > = createAction(this.SET_ORDER_LIST);

  setStatusLoading: ActionFunction1<boolean, Action<boolean>> = createAction(
    this.SET_STATUS_LOADING
  );

  fetchOrderList = (idEmployee: number) => async (dispatch: Dispatch) => {
    dispatch(this.setStatusLoading(true));

    try {
      const response = await serviceApi.getOrderList(idEmployee);
      const data = response.data;
      dispatch(this.setOrderList(data));
    } catch (e) {
      window.confirm(
        `При попытке загрузить список заказов, произошла ошибка: ${e.message}`
      );
    } finally {
      dispatch(this.setStatusLoading(false));
    }
  };
}

export const ordersActions = new OrdersActions();
