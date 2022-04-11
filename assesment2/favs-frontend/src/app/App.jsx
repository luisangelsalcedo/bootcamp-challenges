// import { DesignSystem } from "../../pages/DesignSystem";

import { BrowserRouter } from "react-router-dom";
import { MainRouter } from "../Routers";

// <DesignSystem />
export const App = () => (
  <BrowserRouter>
    <MainRouter />
  </BrowserRouter>
);
