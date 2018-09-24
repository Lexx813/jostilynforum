import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

// we are using redux-form to make our life easier making our forms in react , this combines our reducer together so
// it can go to our store and be connected to react.

const rootReducer = combineReducers({
  form: formReducer
});

export default rootReducer;
