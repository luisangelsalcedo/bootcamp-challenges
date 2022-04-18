import { BrowserRouter } from "react-router-dom";
import { ColorModeProvider, ModalProvider } from "../components";
import { MainRouter } from "../routers";
import { ReduxStore } from "../redux";

export const App = () => (
  <ColorModeProvider>
    <ModalProvider>
      <ReduxStore>
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </ReduxStore>
    </ModalProvider>
  </ColorModeProvider>
);
