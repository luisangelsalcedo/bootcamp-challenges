import "./scss/dashboard.scss";
import { Outlet } from "react-router-dom";

export const Dashboard = () => (
  <div className="dashboard">
    <div className="dashboard-header">header</div>
    <div className="dashboard-body">
      <div className="dashboard-body-left">left</div>
      <div className="dashboard-body-right">
        <Outlet />
      </div>
    </div>
  </div>
);
