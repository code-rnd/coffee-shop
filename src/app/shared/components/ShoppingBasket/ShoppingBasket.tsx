import React, { FC, memo, useCallback, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { getShoppingBasket } from "../../../store/shoppingBasket";
import { routerBuilder } from "../../../routing/RouterBuilder";
import { RouteUrls } from "../../../routing/routing.enums";
import { getFullPrice } from "./ShoppingBasket.utils";

import "./ShoppingBasket.scss";

export const ShoppingBasket: FC = memo(() => {
  const history = useHistory();
  const { list } = useSelector(getShoppingBasket);

  const fullPrice = useMemo(() => getFullPrice(list), [list]);

  const redirectToPay = useCallback(() => {
    history.push(
      routerBuilder.generateSimpleSubRoutePattern(RouteUrls.MAIN, RouteUrls.PAY)
    );
  }, [history]);

  if (!fullPrice) return null;

  return (
    <div
      className="shopping-basket"
      onClick={redirectToPay}
    >{`🏃‍♂️30 минут, ${fullPrice} ₽ →`}</div>
  );
});
