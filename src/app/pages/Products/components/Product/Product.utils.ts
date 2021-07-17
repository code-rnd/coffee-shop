import { PropertyTypes } from "../../../../store/products/products.model";

export const getIcon = (propertyTypes: PropertyTypes): string => {
  switch (propertyTypes) {
    case PropertyTypes.VEGAN:
      return "🥬";

    case PropertyTypes.FISH:
      return "🐟";

    case PropertyTypes.CHEESE:
      return "🧀";

    default:
      return "";
  }
};
