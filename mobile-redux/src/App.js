import React from "react";
import { Provider } from "react-redux";

import { store } from "./redux/store";

import MobileService from "./MobileService";

export const App = () => (
  <Provider store={store}>
    <MobileService />
  </Provider>
);
