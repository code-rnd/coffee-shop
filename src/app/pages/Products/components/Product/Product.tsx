import React, {
  BaseSyntheticEvent,
  FC,
  memo,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  getShoppingBasket,
  shoppingBasketActions,
} from "../../../../store/shoppingBasket";
import { routerBuilder } from "../../../../routing/RouterBuilder";
import { ActionUrls } from "../../../../routing/routing.enums";
import { ProductModel } from "../../../../store/products/products.model";
import { Button } from "../../../../shared/components/Button";
import { getIcon } from "./Product.utils";
import { ExtraProductList } from "../../../../shared/components/ExtraProduct";
import { OrientationMode } from "../../../../shared/components/ExtraProduct/ExtraProductList/ExtraProductList.model";

import "./Product.scss";
import {
  getCountOfCoincidencesProduct,
  removeProductUtils,
  setProductUtils,
} from "../../../../store/shoppingBasket/utils/product.utils";

export const Product: FC<ProductModel> = memo((product) => {
  const { id, name, weight, kilocalories, src, price, propertyTypes } = product;
  const history = useHistory();
  const dispatch = useDispatch();

  const { list } = useSelector(getShoppingBasket);

  const [countOfCoincidences, setCountOfCoincidences] = useState(0);

  const handleGoCard = useCallback(() => {
    history.push(routerBuilder.buildProductPath({ mode: ActionUrls.VIEW, id }));
  }, [history, id]);

  const addProductToBasket = useCallback(
    (event: BaseSyntheticEvent) => {
      event.stopPropagation();

      const prepareData = setProductUtils(product, list);
      dispatch(shoppingBasketActions.setProduct(prepareData));
    },
    [dispatch, product, list]
  );

  const removeProductToBasket = useCallback(
    (event: BaseSyntheticEvent) => {
      event.stopPropagation();

      const prepareData = removeProductUtils(product, list);
      dispatch(shoppingBasketActions.removeProduct(prepareData));
    },
    [dispatch, product, list]
  );

  /** Проверяем кол-во совпадений текущего продукта, с кол-вом которое лежит в корзине */
  useEffect(() => {
    if (!product) return;

    setCountOfCoincidences(getCountOfCoincidencesProduct(list, product));
  }, [list, product]);

  return (
    <>
      <div className="product" onClick={handleGoCard}>
        <div className="product-icon">
          <img src={src} alt={name} loading="lazy" />
        </div>
        <div className="product-description">
          <div className="product-description__title">{name}</div>
          <div className="product-description__weight-calorie">{`${weight} г, ${kilocalories} ккал`}</div>

          <div className="product-price">
            <Button
              title={`${price} ₽`}
              handleAdd={addProductToBasket}
              handleRemove={removeProductToBasket}
              count={countOfCoincidences}
            />
            <span className="product-price__icon">
              {getIcon(propertyTypes)}
            </span>
          </div>
        </div>
      </div>
      {!!countOfCoincidences && (
        <ExtraProductList
          product={product}
          orientation={OrientationMode.HORIZONTAL}
        />
      )}
    </>
  );
});
