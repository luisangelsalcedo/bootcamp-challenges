import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ColorModeProvider } from "../context";
import { MainRouter } from "../Routers";
import { store } from "../redux";

export const App = () => (
  <ColorModeProvider>
    <Provider store={store}>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </Provider>
  </ColorModeProvider>
);
