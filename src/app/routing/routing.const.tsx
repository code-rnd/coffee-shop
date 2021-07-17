import React, { ComponentType } from "react";

import { RouteUrls } from "./routing.enums";
import {
  CardProduct,
  Login,
  Pay,
  Personal,
  Products,
  PromoCode,
} from "../pages";
import { routerBuilder } from "./RouterBuilder";

export interface RouteModel {
  component: ComponentType<any>;
  path: string;
  exact?: boolean;
  permissions?: any[];
}

export interface RouteMenuItemModel {
  name: string;
  route: string;
  permissions?: any[];
}

export const Routes: RouteModel[] = [
  { component: () => <Login />, path: RouteUrls.LOGIN, exact: true },
  { component: () => <Products />, path: RouteUrls.PRODUCTS, exact: true },
  { component: () => <Pay />, path: RouteUrls.PAY, exact: true },
  { component: () => <Personal />, path: RouteUrls.PERSONAL, exact: true },
  { component: () => <PromoCode />, path: RouteUrls.PROMO_CODE, exact: true },
  {
    component: () => <CardProduct />,
    path: routerBuilder.PRODUCTS_CREATE_PATH,
    exact: false,
  },
  {
    component: () => <CardProduct />,
    path: routerBuilder.PRODUCTS_VIEW_EDIT_PATH,
    exact: false,
  },
];
