import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const Public = ({ children }) => {
  const { logged } = useSelector(state => state.auth);

  return <>{!logged ? children : <Navigate to="/" />}</>;
};
