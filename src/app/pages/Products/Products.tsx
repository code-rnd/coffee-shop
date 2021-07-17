import React, { FC, memo } from "react";
import { useSelector } from "react-redux";

import { ShoppingBasket } from "../../shared/components/ShoppingBasket";
import { LocationList } from "../../shared/components/LocationList";
import { NavBar } from "../../shared/components/NavBar";
import { getProducts } from "../../store/products";
import { Product } from "./components/Product";

import "./Products.scss";

export const Products: FC = memo(() => {
  const { productList } = useSelector(getProducts);

  if (!productList?.length) return <div>список продуктов пуст</div>;

  return (
    <>
      <NavBar title="еда на первом" />
      <LocationList />
      <div className="product-list">
        {productList.map((item, key) => (
          <Product {...item} key={key} />
        ))}
      </div>
      <ShoppingBasket />
    </>
  );
});
