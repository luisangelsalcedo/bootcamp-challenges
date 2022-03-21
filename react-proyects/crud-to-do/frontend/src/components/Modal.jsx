import React from "react";

export const Modal = React.memo(
  ({ show, handleShow, children, color = "dark" }) => {
    return (
      <div className={`modal modal-${color} ${show ? "active" : ""}`}>
        <div className="modal-content">
          <button className="btn btn-close" onClick={handleShow}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>

          <div className="form-content">{children}</div>
        </div>
      </div>
    );
  }
);
