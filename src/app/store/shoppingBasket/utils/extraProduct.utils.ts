import { ExtraProductModel, ProductModel } from "../../products/products.model";
import { ProductBasketModel } from "../shoppingBasket.model";
import { getIndexElementProduct } from "../shoppingBasket.utils";

/**
 * Возвращаю кол-во повторений
 * для { ExtraProductModel }
 */
export const getCountOfCoincidencesExtra = (
  product: ProductModel,
  extraProduct: ExtraProductModel,
  list: ProductBasketModel[]
): number => {
  let count = 0;

  list.forEach(({ extraProductList, id }) => {
    if (id === product.id) {
      extraProductList.forEach(({ id, countProduct }) => {
        if (id === extraProduct.id) {
          count = countProduct;
        }
      });
    }
  });

  return count;
};

/**
 * Добавляю доп. продукт к основному продукту, в массиве основных продуктов
 */
export const setExtraProductUtils = (
  product: ProductModel,
  extraProduct: ExtraProductModel,
  list: ProductBasketModel[]
): ProductBasketModel[] => {
  const resultList: ProductBasketModel[] = [...list];

  /** Порядковый индекс основного продукта, в массиве продуктов */
  const productIndex = getIndexElementProduct(list, product);
  /** Порядковый индекс доп. продукта элемента, в массиве доп. продуктов */
  const extraProductIndex = getIndexElementProduct(
    list?.[productIndex]?.extraProductList,
    extraProduct
  );
  const countProduct =
    resultList?.[productIndex]?.extraProductList?.[extraProductIndex]
      ?.countProduct || 0;

  /** Если такого доп. продукта еще нет, то добавляем его */
  if (extraProductIndex < 0) {
    resultList[productIndex].extraProductList.push({
      ...extraProduct,
      countProduct: 1,
    });

    return resultList;
  }

  /** Если такой продукт есть, увеличиваем счетчик на единицу */
  if (extraProductIndex >= 0) {
    resultList[productIndex].extraProductList[extraProductIndex].countProduct =
      countProduct + 1;
    return resultList;
  }

  return resultList;
};

/**
 * Удалаяю доп. продукт из основного продукту, в массиве основных продуктов
 */
export const removeExtraProductUtils = (
  product: ProductModel,
  extraProduct: ExtraProductModel,
  list: ProductBasketModel[]
): ProductBasketModel[] => {
  const resultList: ProductBasketModel[] = [...list];

  /** Порядковый индекс основного продукта, в массиве продуктов */
  const productIndex = getIndexElementProduct(list, product);
  /** Порядковый индекс доп. продукта элемента, в массиве доп. продуктов */
  const extraProductIndex = getIndexElementProduct(
    list?.[productIndex]?.extraProductList,
    extraProduct
  );
  const countProduct =
    resultList?.[productIndex]?.extraProductList?.[extraProductIndex]
      ?.countProduct || 0;

  /** Если такой продукт есть и он последний, то удаляем продукт */
  if (extraProductIndex >= 0 && countProduct === 1) {
    resultList[productIndex].extraProductList.splice(extraProductIndex, 1);

    if (!resultList[productIndex].extraProductList?.length) {
      resultList[productIndex].extraProductList = [];
    }

    return resultList;
  }

  /** Если такой продукт есть, уменьшаем счетчик на единицу */
  if (extraProductIndex >= 0) {
    resultList[productIndex].extraProductList[extraProductIndex].countProduct =
      countProduct - 1;
    return resultList;
  }

  return resultList;
};
