import { Routes, Route } from "react-router-dom";
import { PublicRoutes as Public } from "./PublicRoutes";
import { PrivateRoutes as Private } from "./PrivateRoutes";

import { Dashboard } from "../components";

import {
  FavsPage,
  HomePage,
  LoginPage,
  NotFoundPage,
  RegisterPage,
} from "../pages";

export const MainRouter = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Public>
          <HomePage />
        </Public>
      }
      replace
    />
    <Route
      path="/register"
      element={
        <Public>
          <RegisterPage />
        </Public>
      }
      replace
    />
    <Route
      path="/login"
      element={
        <Public>
          <LoginPage />
        </Public>
      }
      replace
    />
    <Route
      path="/dashboard"
      element={
        <Private>
          <Dashboard />
        </Private>
      }
      replace
    >
      <Route
        path="favs/:id"
        element={
          <Private>
            <FavsPage />
          </Private>
        }
        replace
      />
    </Route>
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
