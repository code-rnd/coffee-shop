import { getCardProduct } from "../../store/cardProduct/cardProduct.utils";
import { CardProductModel } from "../../store/cardProduct/cardProduct.model";
import {
  ExtraProductModel,
  ProductModel,
} from "../../store/products/products.model";
import { ProductBasketModel } from "../../store/shoppingBasket/shoppingBasket.model";
import { OrderModel } from "../../store/orders/orders.model";
import { OrderListMock } from "../../mocks/orderList";
import { ExtraProductListMock, ProductListMock } from "../../mocks/productList";

class ServieApi {
  /** Получить карточку продукта */
  public getCardProduct = async (
    id: number,
    productList: ProductModel[],
    extraProductList: ExtraProductModel[]
  ): Promise<CardProductModel | undefined> => {
    return getCardProduct(id, productList, extraProductList);
  };

  /** Получить список покупок пользователя */
  public getOrderList = async (
    idEmployee: number
  ): Promise<{ data: OrderModel[] }> => {
    return { data: OrderListMock };
  };

  /** Получить полынй список продуктов */
  public getProductList = async (): Promise<{ data: ProductModel[] }> => {
    return { data: ProductListMock };
  };

  /** Получить полный список доп.продуктов */
  public getExtraProductList = async (): Promise<{
    data: ExtraProductModel[];
  }> => {
    return { data: ExtraProductListMock };
  };

  /** Получить информацию о пользователе */
  public getUser = async (id: number) => {};

  /** Отправить заказ */
  public sendShoppingBasket = async (item: ProductBasketModel) => {};
}

export const serviceApi = new ServieApi();
