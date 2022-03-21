import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cleanMessage } from "../redux/actions/message.actions";

export const Alert = React.memo(() => {
  const { message, type } = useSelector(state => state.message);
  const interval = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const pageNotFound = () => {
    if (message.indexOf("Cast to ObjectId failed for value") !== -1)
      navigate("page-not-found");
  };

  useEffect(() => {
    pageNotFound();

    if (!!message) {
      interval.current = setTimeout(() => {
        dispatch(cleanMessage());
      }, 3000);
    }

    return () => {
      clearInterval(interval.current);
    };
  }, [message]);

  return (
    <>
      {
        <div className={`alert alert-${type} ${!!message ? "active" : ""}`}>
          <div>
            {type === "danger" && (
              <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
            )}
            {message}
          </div>
        </div>
      }
    </>
  );
});
