import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ModeColorProvider } from "../context";
import { MainRouter } from "../Routers";
import { store } from "../redux";

export const App = () => (
  <ModeColorProvider>
    <Provider store={store}>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </Provider>
  </ModeColorProvider>
);
