import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  ColorModeProvider,
  LoadingMain,
  ModalProvider,
  NotificationProvider,
} from "../components";
import { ReduxStore } from "../redux";

const MainRouter = lazy(() => import("../routers/MainRouter"));

export const App = () => (
  <ColorModeProvider>
    <NotificationProvider>
      <ModalProvider>
        <ReduxStore>
          <BrowserRouter>
            <Suspense fallback={<LoadingMain />}>
              <MainRouter />
            </Suspense>
          </BrowserRouter>
        </ReduxStore>
      </ModalProvider>
    </NotificationProvider>
  </ColorModeProvider>
);
