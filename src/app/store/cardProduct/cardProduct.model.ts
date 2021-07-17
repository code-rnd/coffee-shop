import { ExtraProductModel, ProductModel } from "../products/products.model";

export interface CardProductModel {
  product?: ProductModel;
  extraProductList?: ExtraProductModel[];
}

export interface CardProductStateModel {
  card?: CardProductModel;
  isLoading: boolean;
}
