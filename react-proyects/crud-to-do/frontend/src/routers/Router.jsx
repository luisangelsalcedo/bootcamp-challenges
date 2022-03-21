import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import { LoginPage } from "../pages/LoginPage";
import { BoardDetailPage } from "../pages/BoardDetailPage";
import { BoardListPage } from "../pages/BoardListPage";
import { NotFound } from "../pages/NotFound";
import { Private } from "../components/Private";
import { Public } from "../components/Public";
import { SignupPage } from "../pages/SignupPage";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const Router = () => {
  const { auth } = useSelector(state => state);

  useEffect(() => {
    auth && localStorage.setItem("user", JSON.stringify(auth));
  }, [auth]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Private>
              <Layout />
            </Private>
          }
        >
          <Route index element={<BoardListPage />} />
          <Route path="board/:id" element={<BoardDetailPage />} />
        </Route>
        <Route
          path="/login"
          element={
            <Public>
              <LoginPage />
            </Public>
          }
        />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
