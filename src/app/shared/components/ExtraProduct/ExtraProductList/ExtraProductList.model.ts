import { ProductModel } from "../../../../store/products/products.model";

export enum OrientationMode {
  VERTICAL = "VERTICAL",
  HORIZONTAL = "HORIZONTAL",
}

export interface ExtraProductListModel {
  product: ProductModel;
  orientation?: OrientationMode;
}
