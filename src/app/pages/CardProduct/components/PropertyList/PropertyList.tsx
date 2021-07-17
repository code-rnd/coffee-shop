import React, { FC, memo } from "react";

import { PropertyBlock } from "../PropertyBlock";
import { PropertyListModel } from "./PropertyList.model";

import "./PropertyList.scss";

export const PropertyList: FC<PropertyListModel> = memo(({ list }) => {
  return (
    <div className="property-list">
      {list.map(({ title, subTitle }, key) => (
        <PropertyBlock title={title} subTitle={subTitle} key={key} />
      ))}
    </div>
  );
});
