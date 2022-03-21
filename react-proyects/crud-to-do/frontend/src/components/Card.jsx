import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { editBoard } from "../redux/actions/board.actions";
import { showModal } from "../redux/actions/modal.actions";

export const Card = React.memo(({ content }) => {
  const { id: authID } = useSelector(state => state.auth);
  const { _id, title, guests, owner, tasks } = content;
  const dispatch = useDispatch();

  const handleEditBoard = () => {
    dispatch(editBoard(content));
    dispatch(showModal({ color: "violet", element: "BoardEditPage" }));
  };

  const handleAddGuest = () => {
    dispatch(editBoard(content));
    dispatch(showModal({ color: "violet", element: "UsersListGuest" }));
  };

  return (
    <div className={authID === owner ? "card card-owner" : "card card-assign"}>
      <div className="card-body">
        <div>
          <Link to={`board/${_id}`}>{title}</Link>
        </div>
        {authID === owner && (
          <div className="card-right">
            <button className="btn" onClick={handleEditBoard}>
              <i className="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
            </button>
          </div>
        )}
      </div>

      <div className="card-footer">
        <Link to={`board/${_id}`}>
          <i className="fa fa-list-ul" aria-hidden="true"></i> {tasks.length}{" "}
          Task
        </Link>

        {authID === owner ? (
          <button className="btn" onClick={handleAddGuest}>
            <i className="fa fa-user" aria-hidden="true" /> {guests.length}{" "}
            guest
          </button>
        ) : (
          <div>
            <i className="fa fa-user" aria-hidden="true" /> {guests.length}{" "}
            guest
          </div>
        )}
      </div>
    </div>
  );
});
