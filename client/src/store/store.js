import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise";
import rootReducer from "./reducers";

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
