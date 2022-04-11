import { Routes, Route } from "react-router-dom";
import { PublicRoutes as Public } from "./PublicRoutes";
import { PrivateRoutes as Private } from "./PrivateRoutes";

import { Dashboard } from "../components";

import {
  FavListPage,
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
    />
    <Route
      path="/register"
      element={
        <Public>
          <RegisterPage />
        </Public>
      }
    />
    <Route
      path="/login"
      element={
        <Public>
          <LoginPage />
        </Public>
      }
    />
    <Route
      path="/dashboard"
      element={
        <Private>
          <Dashboard />
        </Private>
      }
    >
      <Route
        path="favs/:id"
        element={
          <Private>
            <FavListPage />
          </Private>
        }
      />
    </Route>
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
