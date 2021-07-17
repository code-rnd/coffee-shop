import React, { FC, memo, useMemo } from "react";
import { useSelector } from "react-redux";
import { getExtraProductList } from "../../../../store/cardProduct/cardProduct.utils";
import { getProducts } from "../../../../store/products";

import { ExtraProductBlock } from "../ExtraProductBlock";

import {
  ExtraProductListModel,
  OrientationMode,
} from "./ExtraProductList.model";

import "./ExtraProductList.scss";

export const ExtraProductList: FC<ExtraProductListModel> = memo(
  ({ orientation, product }) => {
    const { extraProductList } = useSelector(getProducts);

    const list = useMemo(() => getExtraProductList(extraProductList, product), [
      extraProductList,
      product,
    ]);

    const classnames = useMemo(
      () =>
        `extra-product-list ${
          orientation === OrientationMode.HORIZONTAL
            ? "extra-product-list__mode-horizontal"
            : ""
        }`,
      [orientation]
    );

    if (!extraProductList?.length) return null;

    return (
      <div className={classnames}>
        {list.map((extraProduct, key) => (
          <ExtraProductBlock
            product={product}
            extraProduct={extraProduct}
            key={key}
          />
        ))}
      </div>
    );
  }
);
