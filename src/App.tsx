import React, { FC } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { MainLayout } from "./app/core/MainLayout";
import { Routing } from "./app/routing/routing";
import { urls } from "./app/shared/constants";
import { store } from "./app/store";

export const App: FC = () => {
  return (
    <Provider store={store}>
      <Router basename={urls.baseUrl}>
        <MainLayout>
          <Routing />
        </MainLayout>
      </Router>
    </Provider>
  );
};
