import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../components";
import { DesignSystemPage } from "../pages";

export const MainRouter = () => (
  <Routes>
    <Route path="/" element={<DesignSystemPage />} />
    <Route path="/register" element={<>Registrar usuario</>} />
    <Route path="/login" element={<>login</>} />
    <Route path="*" element={<>Página no encontrada</>} />
    <Route path="/dashboard" element={<Dashboard />}>
      <Route path="favs/:id" element={<>fav</>} />
    </Route>
  </Routes>
);
