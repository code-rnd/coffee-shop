import React, { FC, memo } from "react";

import { NavBarModel } from "./NavBar.model";

import arrowLeft from "../../../../assets/navbar/left-black.svg";
import "./NavBar.scss";

export const NavBar: FC<NavBarModel> = memo(({ title, leftCb, rightCb }) => {
  return (
    <div className="navbar">
      {!!leftCb && (
        <div className="navbar__left" onClick={leftCb}>
          <img src={arrowLeft} alt="вернуться обратно" />
        </div>
      )}
      <div className="navbar__title">{title}</div>
      {!!rightCb && <div className="navbar__right" onClick={rightCb} />}
    </div>
  );
});
