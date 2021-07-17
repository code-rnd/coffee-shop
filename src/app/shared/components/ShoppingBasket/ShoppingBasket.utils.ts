import { ProductBasketModel } from "../../../store/shoppingBasket/shoppingBasket.model";

/** Возвращаю суммарную стоимость товаров в корзине */
export const getFullPrice = (list: ProductBasketModel[]): number => {
  let resultPrice = 0;

  list.forEach(({ extraProductList, price, countProduct }) => {
    resultPrice += price * countProduct;

    extraProductList?.forEach(({ price, countProduct }) => {
      resultPrice += price * countProduct;
    });
  });

  return resultPrice;
};
