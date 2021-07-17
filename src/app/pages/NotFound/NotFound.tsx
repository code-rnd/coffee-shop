import React, { FC, memo, useCallback } from "react";
import { useHistory } from "react-router-dom";

import { routerBuilder } from "app/routing/RouterBuilder";
import { RouteUrls } from "app/routing/routing.enums";

export const NotFound: FC = memo(() => {
  const history = useHistory();

  const redirectToProductList = useCallback(() => {
    history.push(
      routerBuilder.generateSimpleSubRoutePattern(
        RouteUrls.MAIN,
        RouteUrls.PRODUCTS
      )
    );
  }, [history]);

  return (
    <div className="not-found-page">
      Страница не найдена
      <button onClick={redirectToProductList}>Список продуктов</button>
    </div>
  );
});
