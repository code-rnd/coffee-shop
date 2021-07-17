import { generatePath } from "react-router";

import { RouteUrls, ActionUrls } from "./routing.enums";

class RouterBuilder {
  PRODUCTS_CREATE_PATH = `${RouteUrls.PRODUCTS}:mode(${ActionUrls.CREATE})`;
  PRODUCTS_VIEW_EDIT_PATH = `${RouteUrls.PRODUCTS}:mode(${ActionUrls.VIEW}|${ActionUrls.EDIT})/:id`;

  generateSimpleSubRoutePattern(route: string, subRoute: string) {
    return `${route}${subRoute}`;
  }

  buildProductPath(params: { mode: ActionUrls; id?: number }) {
    const { mode, id } = params;
    return mode === ActionUrls.CREATE
      ? generatePath(this.PRODUCTS_CREATE_PATH, { mode })
      : generatePath(this.PRODUCTS_VIEW_EDIT_PATH, { mode, id });
  }
}

export const routerBuilder = new RouterBuilder();
