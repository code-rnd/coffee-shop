import { ExtraProductModel, ProductModel } from "../products/products.model";

export interface ExtraProductItem extends ExtraProductModel {
  countProduct: number;
}

export interface ProductBasketModel extends ProductModel {
  countProduct: number;
  extraProductList: ExtraProductItem[];
}

export interface ShoppingBasketStateModel {
  list: ProductBasketModel[];
  isLoading: boolean;
}
