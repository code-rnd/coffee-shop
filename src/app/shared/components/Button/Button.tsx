import React, { FC, memo, useMemo } from "react";

import { ButtonMode, ButtonModel } from "./Button.model";

import "./Button.scss";

export const Button: FC<ButtonModel> = memo(
  ({
    title,
    handleAdd,
    handleRemove,
    disabled,
    count = 0,
    mode = ButtonMode.DEFAULT,
  }) => {
    const defaultContent = useMemo(() => {
      if (count > 0) {
        return (
          <div className="button-group button">
            <div className="button-group__button" onClick={handleRemove}>
              -
            </div>
            <div className="button-group__count">{count}</div>
            <div className="button-group__button" onClick={handleAdd}>
              +
            </div>
          </div>
        );
      }
      return (
        <div className="button" onClick={handleAdd}>
          {title}
        </div>
      );
    }, [count, handleRemove, handleAdd, title]);

    const miniContent = useMemo(() => {
      if (count > 0) {
        return (
          <div className="button-group button">
            <div className="button-group__button" onClick={handleRemove}>
              -
            </div>
            <div className="button-group__count">{count}</div>
            <div className="button-group__button" onClick={handleAdd}>
              +
            </div>
          </div>
        );
      }
      return (
        <div className="button" onClick={handleAdd}>
          {title}
          <div className="button__add"/>
        </div>
      );
    }, [count, handleRemove, handleAdd, title]);

    const button = useMemo(() => {
      switch (mode) {
        case ButtonMode.DEFAULT:
          return defaultContent;

        case ButtonMode.MINI:
          return miniContent;

        default:
          return defaultContent;
      }
    }, [mode, defaultContent, miniContent]);

    return button;
  }
);
