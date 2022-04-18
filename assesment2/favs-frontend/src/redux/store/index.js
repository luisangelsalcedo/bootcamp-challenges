import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { authReducer, favsReducer } from "../reducers";

const rootreducer = combineReducers({
  auth: authReducer,
  favs: favsReducer,
});
const store = createStore(
  rootreducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
