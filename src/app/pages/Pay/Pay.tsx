import React, { FC, memo, useCallback, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { getFullPrice } from "../../shared/components/ShoppingBasket/ShoppingBasket.utils";
import { getShoppingBasket } from "../../store/shoppingBasket";
import { WishesDataItem, WishesDataList } from "./Pay.utils";
import { routerBuilder } from "../../routing/RouterBuilder";
import { Product } from "../Products/components/Product";
import { RouteUrls } from "../../routing/routing.enums";
import { NavBar } from "../../shared/components/NavBar";

import "./Pay.scss";

export const Pay: FC = memo(() => {
  const history = useHistory();
  const { list } = useSelector(getShoppingBasket);

  const fullPrice = useMemo(() => getFullPrice(list), [list]);

  const redirectToProductList = useCallback(() => {
    history.push(
      routerBuilder.generateSimpleSubRoutePattern(
        RouteUrls.MAIN,
        RouteUrls.PRODUCTS
      )
    );
  }, [history]);

  const wishesList = useCallback(
    (list: WishesDataItem[]) =>
      list.map(({ scr, alt, title, subTitle, component }, key) => (
        <div className="pay-wishes__list" key={key}>
          <div className="pay-wishes__list-item">
            <div className="pay-wishes__list-item-icon">
              <img src={scr} alt={alt} />
            </div>
            <div className="wishes-item__content">
              <div className="wishes-item__content-title">{title}</div>
              <div className="wishes-item__content-subtitle">{subTitle}</div>
            </div>
            {component}
          </div>
        </div>
      )),
    []
  );

  useEffect(() => {
    if (!list?.length) {
      redirectToProductList();
    }
  }, [list, history, redirectToProductList]);

  return (
    <>
      <NavBar title="еда почти твоя" leftCb={redirectToProductList} />
      <div className="product-list">
        {list.map((item, key) => (
          <Product {...item} key={key} />
        ))}
      </div>
      <div className="pay">
        <div className="pay-wishes">
          <div className="pay-wishes__title">Пожелания</div>
          {wishesList(WishesDataList)}
        </div>

        <div className="pay-pay">
          <div className="pay-pay__title">Оплата</div>
          <div className="pay-pay__price-list">
            <div className="pay-pay__price-list-item">
              <span>{`${fullPrice} ₽`}</span>
              <span>к оплате</span>
            </div>
            <div className="pay-pay__price-list-item">
              <span>{`${fullPrice} ₽`}</span>
              <span>за еду</span>
            </div>
            <div className="pay-pay__price-list-item">
              <span>{`0 ₽`}</span>
              <span>доставка</span>
            </div>
          </div>
          <div className="pay-pay__button">{`Оплатить ${fullPrice} ₽`}</div>
        </div>
      </div>
    </>
  );
});
