import React, { FC, memo, useMemo, useState } from "react";
import { useSelector } from "react-redux";

import { getProfile } from "../../../store/profile";
import { LocationButton } from "./components/LocationButton";

import "./LocationList.scss";

export const LocationList: FC = memo(() => {
  const { user } = useSelector(getProfile);

  const [activeButtonId, setActiveButton] = useState<number>(0);

  const locationListLength: number = useMemo(
    () => user?.location?.length || 0,
    [user]
  );

  const list = useMemo(
    () =>
      user?.location?.map((location, key) => (
        <LocationButton
          location={location}
          id={key}
          setActiveButton={setActiveButton}
          activeButtonId={activeButtonId}
          key={key}
        />
      )),
    [user, activeButtonId]
  );

  return (
    <div className="location-list">
      {list}
      <LocationButton
        id={locationListLength + 1}
        setActiveButton={setActiveButton}
        activeButtonId={activeButtonId}
      />
    </div>
  );
});
