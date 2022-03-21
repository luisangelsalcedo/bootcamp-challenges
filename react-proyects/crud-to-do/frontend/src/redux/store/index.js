import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

import { authReducer } from "../reducers/auth.reducer";
import { messageReducer } from "../reducers/message.reducer";
import { boardReducer } from "../reducers/board.reducer";
import { modalReducer } from "../reducers/modal.reducer";
import { userReducer } from "../reducers/user.reducer";
import { taskReducer } from "./../reducers/task.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  message: messageReducer,
  modal: modalReducer,
  board: boardReducer,
  user: userReducer,
  task: taskReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
