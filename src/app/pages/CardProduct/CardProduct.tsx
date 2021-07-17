import React, {
  FC,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { ProductCardRouteParams } from "../../shared/models/productCard/ProductCardRouteParams.model";
import { ActionUrls, RouteUrls } from "../../routing/routing.enums";
import { cardProductActions } from "../../store/cardProduct";
import { routerBuilder } from "../../routing/RouterBuilder";
import { PropertyList } from "./components/PropertyList";
import { getCardProduct } from "../../store/cardProduct";
import { Button } from "../../shared/components/Button";
import {
  getShoppingBasket,
  shoppingBasketActions,
} from "../../store/shoppingBasket";
import { ExtraProductList } from "../../shared/components/ExtraProduct";
import {
  getCountOfCoincidencesProduct,
  removeProductUtils,
  setProductUtils,
} from "../../store/shoppingBasket/utils/product.utils";

import "./CardProduct.scss";
import { ShoppingBasket } from "../../shared/components/ShoppingBasket";
import { NavBar } from "../../shared/components/NavBar";

export const CardProduct: FC = memo(() => {
  const { mode, id } = useParams<ProductCardRouteParams>();
  const dispatch = useDispatch();
  const history = useHistory();

  const { list } = useSelector(getShoppingBasket);
  const { card } = useSelector(getCardProduct);

  const [countOfCoincidences, setCountOfCoincidences] = useState(0);

  const product = card?.product;

  /** Редиректим на список продуктов, если пользак попал в несуществующий продукт */
  const redirectToProductList = useCallback(() => {
    history.push(
      routerBuilder.generateSimpleSubRoutePattern(
        RouteUrls.MAIN,
        RouteUrls.PRODUCTS
      )
    );
  }, [history]);
  useEffect(() => {
    if (mode !== ActionUrls.CREATE && !!id) {
      dispatch(
        cardProductActions.fetchCardProduct(parseInt(id), redirectToProductList)
      );
    }
  }, [id, dispatch, mode, redirectToProductList]);

  /** Очищаем состояние после демонтирования компоненты */
  useEffect((): (() => void) => {
    return () => dispatch(cardProductActions.clearCardProduct());
  }, []);

  /** Проверяем кол-во совпадений текущего продукта, с кол-вом которое лежит в корзине */
  useEffect(() => {
    if (!product) return;

    setCountOfCoincidences(getCountOfCoincidencesProduct(list, product));
  }, [list, product]);

  const addProductToBasket = useCallback(() => {
    if (!product) return;

    const prepareData = setProductUtils(product, list);
    dispatch(shoppingBasketActions.setProduct(prepareData));
  }, [dispatch, product, list]);

  const removeProductToBasket = useCallback(() => {
    if (!product) return;

    const prepareData = removeProductUtils(product, list);
    dispatch(shoppingBasketActions.removeProduct(prepareData));
  }, [dispatch, product, list]);

  const propertyList = useMemo(() => {
    if (!product) return [];

    return [
      { title: `${product.weight}`, subTitle: "г" },
      { title: `${product.kilocalories}`, subTitle: "ккал" },
      { title: `${product.proteins}`, subTitle: "белки" },
      { title: `${product.fats}`, subTitle: "жиры" },
      { title: `${product.carbohydrates}`, subTitle: "углеводы" },
    ];
  }, [product]);

  if (!product) return null;

  return (
    <>
      <NavBar title="вкуснота" leftCb={redirectToProductList} />
      <div className="card-product">
        <div className="card-product-icon">
          <img src={product.src} alt={product.name} loading="lazy" />
        </div>
        <div className="card-product-title">
          <span>{product.name}</span>
          <Button
            title={`${product.price} ₽`}
            handleAdd={addProductToBasket}
            handleRemove={removeProductToBasket}
            count={countOfCoincidences}
          />
        </div>
        <PropertyList list={propertyList} />
        <div className="card-product-description">{product.description}</div>
        <ExtraProductList product={product} />
      </div>
      <ShoppingBasket />
    </>
  );
});
