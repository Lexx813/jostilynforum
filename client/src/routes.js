import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

const AppRouter = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <h1>hello this is React</h1>
        </Switch>
      </Router>
    </Provider>
  );
};

export default AppRouter;
