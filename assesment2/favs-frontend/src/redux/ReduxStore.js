import { Provider } from "react-redux";
import store from "./store";

export const ReduxStore = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
