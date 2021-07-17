import React, { FC, memo } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { RouteUrls } from "app/routing/routing.enums";
import { Routes } from "app/routing/routing.const";
import {Products} from "app/pages/Products";

export const Routing: FC = memo(() => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to={RouteUrls.PRODUCTS} />
        </Route>
        {Routes.map((route, key) => {
          const { path, component, exact } = route;
          return (
            <Route exact={exact} path={path} component={component} key={key} />
          );
        })}
        <Route component={Products} />
      </Switch>
    </>
  );
});
