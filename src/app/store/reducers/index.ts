import { combineReducers } from "redux";
import { profileReducer as profile } from "../profile";
import { productsReducer as products } from "../products";
import { cardProductsReducer as cardProduct } from "../cardProduct";
import { ordersReducer as orders } from "../orders";
import { coordinatesReducer as coordinates } from "../coordinates";
import { shoppingBasketReducer as shoppingBasket } from "../shoppingBasket";

export const reducers = combineReducers({
  profile,
  products,
  cardProduct,
  orders,
  coordinates,
  shoppingBasket,
});
