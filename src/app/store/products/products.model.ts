export enum ProductCategory {
  BREAKFAST = "BREAKFAST",
  LUNCH = "LUNCH",
  DINNER = "DINNER",
  DRINK = "DRINK",
}

export enum PropertyTypes {
  VEGAN = "VEGAN",
  CHEESE = "CHEESE",
  FISH = "FISH",
  ALL = "ALL",
}

export interface ProductModel {
  id: number;
  price: number;
  kilocalories: number;
  proteins: number;
  fats: number;
  carbohydrates: number;
  weight: number;
  description: string;
  name: string;
  category: ProductCategory;
  propertyTypes: PropertyTypes;
  src: string;
}

export interface ExtraProductModel {
  id: number;
  price: number;
  name: string;
  weight: number;
  src: string;
  category: ProductCategory[];
}

export interface ProductsStateModel {
  productList: ProductModel[];
  extraProductList: ExtraProductModel[];
  isLoading: boolean;
}
