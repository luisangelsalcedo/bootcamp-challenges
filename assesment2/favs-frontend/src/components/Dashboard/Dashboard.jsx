import "./scss/dashboard.scss";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { useContext } from "react";
import { Avatar, Logo, Btn, ToggleMode } from "../DesignSystem";
import { logout } from "../../redux";
import { ColorModeContext } from "../../context";

export const Dashboard = () => {
  const { colorMode, changeColorMode } = useContext(ColorModeContext);
  const { name, imageUrl } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={!colorMode ? "" : "dark"}>
      <div className={!colorMode ? "dashboard" : "dashboard dark"}>
        <div className="dashboard-header">
          <div className="container">
            <Logo />
            <div>
              <Avatar name={name} img={imageUrl} />
              <Btn label="Salir" fa="sign-out" onClick={handleLogout} />
            </div>
          </div>
        </div>
        <div className="dashboard-body">
          <div className="dashboard-body-left">
            <div className="container">
              <ToggleMode active={colorMode} handler={changeColorMode} />
            </div>
          </div>
          <div className="dashboard-body-right">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
