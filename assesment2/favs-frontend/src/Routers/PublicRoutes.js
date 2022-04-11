import { Navigate, useLocation } from "react-router-dom";

export const PublicRoutes = ({ children }) => {
  const { logged } = { logged: false };
  const location = useLocation();

  return !logged ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
