import React, { FC, memo, useCallback, useMemo } from "react";

import { LocationButtonModel } from "./LocationButton.model";
import { getFullAddress, getTimeInterval } from "./LocationButton.utils";

import "./LocationButton.scss";

export const LocationButton: FC<LocationButtonModel> = memo(
  ({ location, id, activeButtonId, setActiveButton }) => {
    const handleClick = useCallback(() => setActiveButton(id), [
      setActiveButton,
      id,
    ]);

    const classnames = useMemo(
      () =>
        `location-button ${
          activeButtonId === id ? "location-button_active" : ""
        }`,
      [activeButtonId, id]
    );

    const content = useMemo(() => {
      if (!location) return "Добавить адрес";

      const address = getFullAddress(location);
      const time = getTimeInterval(location);

      return (
        <>
          <div className="location-button__address">{address}</div>
          <div className="location-button__time">{time}</div>
        </>
      );
    }, [location]);

    return (
      <div className="padding-container" onClick={handleClick}>
        <div className={classnames}>{content}</div>
      </div>
    );
  }
);
