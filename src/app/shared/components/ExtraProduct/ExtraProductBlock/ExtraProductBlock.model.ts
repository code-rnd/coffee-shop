import {
  ExtraProductModel,
  ProductModel,
} from "app/store/products/products.model";

export interface ExtraProductBlockModel {
  extraProduct: ExtraProductModel;
  product: ProductModel;
}
