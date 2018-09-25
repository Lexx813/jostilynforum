import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import LayOut from "./hoc/layout";
// PAGES  this is all our individual pages we will link to
import HomePage from "./components/Home";

/// this is where we connect our redux,  store and make our routes for the frontend in react
/// routes meaning links to different pages in our app
// the provider is what passes our store , meaning our global state, state is data that we are passing into
// our app from our api or from our app to our api

const AppRouter = () => {
  return (
    <Provider store={store}>
      <Router>
        <LayOut>
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </LayOut>
      </Router>
    </Provider>
  );
};

export default AppRouter;
