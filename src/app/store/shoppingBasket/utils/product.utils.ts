import { ProductModel } from "../../products/products.model";
import { ProductBasketModel } from "../shoppingBasket.model";
import { getIndexElementProduct } from "../shoppingBasket.utils";

/**
 * Возвращаю кол-во повторений
 * для { ProductModel }
 */
export const getCountOfCoincidencesProduct = (
  list: ProductBasketModel[],
  item: ProductModel
): number => {
  let count = 0;

  list.forEach(({ id, countProduct }) => {
    if (id === item.id) {
      count = countProduct;
    }
  });

  return count;
};

/** Добавляю продукт в массив продуктов */
export const setProductUtils = (
  product: ProductModel,
  list: ProductBasketModel[]
): ProductBasketModel[] => {
  const resultList: ProductBasketModel[] = [...list];
  let prepareItem: ProductBasketModel = {} as ProductBasketModel;

  /** Если продуктов еще нет, то добавляем первый */
  if (!resultList?.length) {
    prepareItem = {
      ...product,
      countProduct: 1,
      extraProductList: [],
    };
    resultList.push(prepareItem);

    return resultList;
  }

  /** Порядковый индекс элемента, в массиве продуктов */
  const productIndex = getIndexElementProduct(list, product);
  const countProduct = list?.[productIndex]?.countProduct;
  const extraProductList = list?.[productIndex]?.extraProductList || [];

  /** Если такого продукта еще нет, то добавляем его */
  if (productIndex < 0) {
    prepareItem = {
      ...product,
      countProduct: 1,
      extraProductList: [],
    };

    resultList.push(prepareItem);
    return resultList;
  }

  /** Если такой продукт есть, то увеличиваем счетчик на единицу */
  if (productIndex >= 0) {
    prepareItem = {
      ...product,
      extraProductList,
      countProduct: countProduct + 1,
    };

    resultList[productIndex] = {
      ...prepareItem,
    };
    return resultList;
  }

  return resultList;
};

/** Удаляю продукт из массива продуктов */
export const removeProductUtils = (
  product: ProductModel,
  list: ProductBasketModel[]
): ProductBasketModel[] => {
  let resultList: ProductBasketModel[] = [...list];
  let prepareItem: ProductBasketModel = {} as ProductBasketModel;

  /** Если продуктов итак нет, то возвращаю пустой массив */
  if (!resultList?.length) {
    return resultList;
  }

  /** Порядковый индекс элемента, в массиве продуктов */
  const productIndex = getIndexElementProduct(list, product);
  const countProduct = list?.[productIndex]?.countProduct;
  const extraProductList = list?.[productIndex]?.extraProductList || [];

  /** Если такого продукта итак нет, то возвращаем массив продуктов */
  if (productIndex < 0) {
    return resultList;
  }

  /** Если такой продукт есть и он последний, то удаляем продукт */
  if (productIndex >= 0 && countProduct === 1) {
    resultList.splice(productIndex, 1);

    if (!resultList?.length) {
      resultList = [];
    }

    return resultList;
  }

  /** Если такой продукт есть, то уменьшаем счетчик на единицу */
  if (productIndex >= 0) {
    prepareItem = {
      ...product,
      extraProductList,
      countProduct: countProduct - 1,
    };

    resultList[productIndex] = { ...prepareItem };
    return resultList;
  }

  return resultList;
};
