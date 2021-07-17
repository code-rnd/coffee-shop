import React, { FC, memo, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ordersActions } from "../../store/orders";
import { getProfile } from "../../store/profile";
import { coordinatesActions, getCoordinates } from "../../store/coordinates";

import "./MainLayout.scss";

export const MainLayout: FC = memo(({ children }) => {
  const { user, isLoading } = useSelector(getProfile);
  const { coordinates, geolocation } = useSelector(getCoordinates);
  const dispatch = useDispatch();

  /** Проверяем информацию о пользователе */
  // useEffect(() => {
  //   dispatch(profileActions.fetchUserData());
  // }, [dispatch]);

  /** Редиректы */
  // useEffect(() => {
  //   if (!user) {
  //     history.push(
  //       routerBuilder.generateSimpleSubRoutePattern(
  //         RouteUrls.MAIN,
  //         RouteUrls.LOGIN
  //       )
  //     );
  //   }
  // }, [user, history]);

  /** Запрашиваем список заказов */
  useEffect(() => {
    if (!!user) {
      dispatch(ordersActions.fetchOrderList(user.id));
    }
  }, [user, dispatch]);

  /** Запрашиваем координаты */
  useEffect(() => {
    if (!!user && !coordinates) {
      dispatch(coordinatesActions.fetchCoordinates());
    }
  }, [user, coordinates, dispatch]);

  /** Запрашиваем местоположение */
  useEffect(() => {
    if (
      !!user &&
      !geolocation &&
      !!coordinates?.latitude &&
      !!coordinates?.longitude
    ) {
      dispatch(coordinatesActions.fetchGeoLocation(coordinates));
    }
  }, [user, geolocation, coordinates, dispatch]);

  const content = useMemo(
    () => !isLoading && <div className="main-layout__content">{children}</div>,
    [isLoading, children]
  );

  return <div className="main-layout">{content}</div>;
});
