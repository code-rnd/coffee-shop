import { ExtraProductModel, ProductModel } from "../products/products.model";
import { CardProductModel } from "./cardProduct.model";

/**
 * Возвращаю карточку продукта
 */
export const getCardProduct = (
  productId: number,
  productList: ProductModel[],
  extraProductList: ExtraProductModel[]
): CardProductModel | undefined => {
  let product: ProductModel | undefined = undefined;

  if (!productList?.length) return undefined;

  product = productList.filter((product) => product.id === productId)[0];

  return { product, extraProductList };
};

/**
 * Возвращаю массив, отфильтрованных дополнительных продуктов
 */
export const getExtraProductList = (
  list: ExtraProductModel[],
  product: ProductModel
): ExtraProductModel[] => {
  return list.filter((item) => {
    const category = product.category;
    return item.category.includes(category);
  });
};
