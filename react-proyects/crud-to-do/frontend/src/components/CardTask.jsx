import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { showModal } from "../redux/actions/modal.actions";
import {
  deleteTaskAsync,
  editTask,
  updateTaskAsync,
} from "../redux/actions/task.actions";

export const CardTask = React.memo(({ content }) => {
  const { _id, title, board, complete, assigneds } = content;
  const { token } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTaskAsync({ token, taskID: _id }));
  };

  const handleEdit = () => {
    dispatch(editTask(content));
    dispatch(showModal({ color: "warning", element: "TaskEditPage" }));
  };

  const handleAssigned = () => {
    dispatch(editTask(content));
    dispatch(showModal({ color: "warning", element: "UsersListAsigned" }));
  };

  const handleState = () => {
    const param = { token, taskID: _id, task: { complete: !complete } };
    dispatch(updateTaskAsync(param));
  };

  return (
    <div className={complete ? "card card-complete" : "card card-task"}>
      <div className="card-body">
        {title}
        <div className="card-right">
          {complete ? (
            <>
              <button className="btn" onClick={handleDelete}>
                <i className="fa fa-trash fa-2x" aria-hidden="true" />
              </button>
            </>
          ) : (
            <>
              <button className="btn" onClick={handleEdit}>
                <i className="fa fa-pencil-square-o fa-2x" aria-hidden="true" />
              </button>
            </>
          )}
        </div>
      </div>
      <div className="card-footer">
        <div>
          {complete ? (
            <>
              <i className="fa fa-user" aria-hidden="true" />{" "}
              {assigneds?.length} assigned
            </>
          ) : (
            <button className="btn" onClick={handleAssigned}>
              <i className="fa fa-user" aria-hidden="true" />{" "}
              {assigneds?.length} assigned
            </button>
          )}
        </div>
        <div>
          <button className="btn" onClick={handleState}>
            {complete ? (
              <>
                <i className="fa fa-check" aria-hidden="true" /> Complete
              </>
            ) : (
              <>
                <i className="fa fa-eye" aria-hidden="true" /> Pending
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
});
