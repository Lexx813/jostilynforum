import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise";
import rootReducer from "./reducers";
// This is our store setup in order for us to use Redux in our project also with redux tools extension we can
// use with our chrome browser download it install it into chrome
// also using redux middleware thunk and promise to handle our promises amd mot have to use async functions

const middleware = [thunk, promise];
//Store
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
