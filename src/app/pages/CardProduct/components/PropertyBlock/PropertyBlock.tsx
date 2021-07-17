import React, { FC, memo } from "react";

import "./PropertyBlock.scss";

export const PropertyBlock: FC<{ title: string; subTitle: string }> = memo(
  ({ title, subTitle }) => {
    return (
      <div className="property-block">
        <div className="property-block__title">{title}</div>
        <div className="property-block__subTitle">{subTitle}</div>
      </div>
    );
  }
);
