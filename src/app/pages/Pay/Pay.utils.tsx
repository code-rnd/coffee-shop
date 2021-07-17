import React from "react";

import { Button } from "../../shared/components/Button";

import iconCutley from "../../../assets/navbar/cutlery.svg";
import iconBio from "../../../assets/navbar/bio.svg";
import iconRecycle from "../../../assets/navbar/recycle.svg";

export interface WishesDataItem {
  scr: string;
  alt: string;
  title: string;
  subTitle: string;
  component: any;
}

export const WishesDataList: WishesDataItem[] = [
  {
    scr: iconCutley,
    alt: "добавить в корзину столовые приборы: вилка, ложка и нож",
    title: "Привезите приборы",
    subTitle: "Вилка, ложка и нож",
    component: (
      <Button title="0 ₽" handleAdd={() => {}} handleRemove={() => {}} />
    ),
  },
  {
    scr: iconBio,
    alt: "бесконтактная доставка",
    title: "Бесконтактная доставка",
    subTitle: "Оставим, где скажите",
    component: (
      <Button title="0 ₽" handleAdd={() => {}} handleRemove={() => {}} />
    ),
  },
  {
    scr: iconRecycle,
    alt: "забрать чистую упоковку с прошлого заказа, для вторичной переработки",
    title: "Заберите упаковку",
    subTitle: "Чистые контейнеры от прошлого заказа пойдут на переработку",
    component: (
      <Button title="0 ₽" handleAdd={() => {}} handleRemove={() => {}} />
    ),
  },
];
