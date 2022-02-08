import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { calculatorReducer } from "./../reducers/calculatorReducer";
import { uiReducer } from "../reducers/uiReducer";

const rootReducers = combineReducers({
  calculator: calculatorReducer,
  ui: uiReducer,
});

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
