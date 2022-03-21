import React from "react";
import { useDispatch } from "react-redux";
import { logoutAsync } from "../redux/actions/auth.actions";
import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

export const NavBar = React.memo(() => {
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <div>
        <Avatar />
      </div>
      <div>
        <Link to="/" className="btn btn-icon btn-icon-left">
          <i className="fa fa-th-large" aria-hidden="true"></i>
          DASHBOARD
        </Link>
        <button
          className="btn btn-icon btn-icon-right"
          onClick={() => dispatch(logoutAsync())}
        >
          LOG OUT <i className="fa fa-sign-out" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
});
