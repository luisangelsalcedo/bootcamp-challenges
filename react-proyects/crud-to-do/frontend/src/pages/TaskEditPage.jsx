import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { hideModal } from "../redux/actions/modal.actions";
import { updateTaskAsync } from "./../redux/actions/task.actions";

export const TaskEditPage = React.memo(({ task }) => {
  const { token } = useSelector(state => state.auth);
  const { show } = useSelector(state => state.modal);
  const dispatch = useDispatch();

  const inputTitle = useRef();
  const inputBtn = useRef();

  const handleChange = e => {
    !!inputTitle.current.value.length
      ? (inputBtn.current.disabled = false)
      : (inputBtn.current.disabled = true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const params = {
      token,
      taskID: task._id,
      task: { title: inputTitle.current.value },
    };
    dispatch(updateTaskAsync(params));
    dispatch(hideModal());
  };

  useEffect(() => {
    inputTitle.current.focus();
    inputTitle.current.value = task.title;
  }, [show]);

  return (
    <div>
      <h3>UPDATE TASK</h3>
      <form onSubmit={handleSubmit} className="inline">
        <div className="formInput">
          <input
            ref={inputTitle}
            type="text"
            required={true}
            onChange={handleChange}
            placeholder="Task title"
          />
        </div>

        <button ref={inputBtn} className="btn btn-success">
          UPDATE
        </button>
      </form>
    </div>
  );
});
