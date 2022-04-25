import "./scss/dashboard.scss";
import { Outlet, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useContext } from "react";
import {
  Avatar,
  Logo,
  Btn,
  ToggleMode,
  ModalContext,
  NotificationContext,
} from "../DesignSystem";
import { FavListPage } from "../../pages/FavListPage";
import { exit } from "../../redux";
import { CreditsPage } from "../../pages/CreditsPage";

export const Dashboard = () => {
  const { name, imageUrl } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { id: isOpen } = useParams();
  const { openModal } = useContext(ModalContext);
  const { openNotice } = useContext(NotificationContext);

  const handleLogout = async () => {
    dispatch(exit());
    await openNotice(`See you soon ${name.split(" ")[0]}`);
  };

  const handleCredits = () => {
    openModal(<CreditsPage />);
  };

  return (
    <div className={`${isOpen ? "active" : ""}`}>
      <div className="dashboard">
        <div className="dashboard-header">
          <div className="container">
            <Logo handler={handleCredits} />
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
