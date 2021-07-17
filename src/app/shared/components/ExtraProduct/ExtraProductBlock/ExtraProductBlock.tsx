import React, { FC, memo, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "app/shared/components/Button";
import {
  getShoppingBasket,
  shoppingBasketActions,
} from "app/store/shoppingBasket";
import {
  getCountOfCoincidencesExtra,
  removeExtraProductUtils,
  setExtraProductUtils,
} from "app/store/shoppingBasket/utils/extraProduct.utils";
import { ExtraProductBlockModel } from "./ExtraProductBlock.model";

import "./ExtraProductBlock.scss";

export const ExtraProductBlock: FC<ExtraProductBlockModel> = memo(
  ({ product, extraProduct }) => {
    const { src, name, weight, price } = extraProduct;
    const dispatch = useDispatch();

    const { list } = useSelector(getShoppingBasket);

    const [countOfCoincidences, setCountOfCoincidences] = useState(0);

    const addProductToBasket = useCallback(() => {
      if (!extraProduct) return;

      const prepareData = setExtraProductUtils(product, extraProduct, list);
      dispatch(shoppingBasketActions.setExtraProduct(prepareData));
    }, [dispatch, product, extraProduct, list]);

    const removeProductToBasket = useCallback(() => {
      if (!extraProduct) return;

      const prepareData = removeExtraProductUtils(product, extraProduct, list);
      dispatch(shoppingBasketActions.removeExtraProduct(prepareData));
    }, [dispatch, product, extraProduct, list]);

    /** Проверяем кол-во совпадений текущего доп. продукта, с кол-вом которое лежит в корзине */
    useEffect(() => {
      if (!extraProduct) return;

      setCountOfCoincidences(
        getCountOfCoincidencesExtra(product, extraProduct, list)
      );
    }, [extraProduct, product, list]);

    return (
      <div className="extra-product-block">
        <div className="extra-product-block__properties">
          <img src={src} alt={name} loading="lazy" />
          <div>
            <div className="properties__title">{name}</div>
            <div className="properties__subTitle">{`${weight} г`}</div>
          </div>
        </div>
        <Button
          title={`${price} ₽`}
          handleAdd={addProductToBasket}
          handleRemove={removeProductToBasket}
          count={countOfCoincidences}
        />
      </div>
    );
  }
);
