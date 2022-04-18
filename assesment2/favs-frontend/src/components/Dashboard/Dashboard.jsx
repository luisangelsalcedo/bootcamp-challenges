import "./scss/dashboard.scss";
import { Outlet, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Avatar, Logo, Btn, ToggleMode } from "../DesignSystem";
import { FavListPage } from "../../pages/FavListPage";
import { logout } from "../../redux";

export const Dashboard = () => {
  const { name, imageUrl } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { id: isOpen } = useParams();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={`${isOpen ? "active" : ""}`}>
      <div className="dashboard">
        <div className="dashboard-header">
          <div className="container">
            <Logo />
            <div>
              <Avatar name={name} img={imageUrl} />
              <Btn label="Salir" fa="sign-out" onClick={handleLogout} />
            </div>
            <ToggleMode />
          </div>
        </div>
        <div className="dashboard-body">
          <div className="dashboard-body-left bg-red">
            <FavListPage />
          </div>
          <div className="dashboard-body-right">
            <div className="container">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
