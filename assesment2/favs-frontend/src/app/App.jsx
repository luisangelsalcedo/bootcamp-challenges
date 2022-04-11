// import { DesignSystem } from "../../pages/DesignSystem";

import { BrowserRouter } from "react-router-dom";
import { ModeColorProvider } from "../context";
import { MainRouter } from "../Routers";

// <DesignSystem />
export const App = () => (
  <ModeColorProvider>
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  </ModeColorProvider>
);
