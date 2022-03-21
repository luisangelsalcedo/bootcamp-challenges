import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { hideModal } from "../redux/actions/modal.actions";
import { createTaskAsync } from "../redux/actions/task.actions";

export const TaskFormPage = React.memo(() => {
  const { token } = useSelector(state => state.auth);
  const { show } = useSelector(state => state.modal);
  const dispatch = useDispatch();

  const { id: boardID } = useParams();

  const inputTitle = useRef();
  const inputBtn = useRef();

  const handleChange = e => {
    !!inputTitle.current.value.length
      ? (inputBtn.current.disabled = false)
      : (inputBtn.current.disabled = true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const params = { token, boardID, title: inputTitle.current.value };
    dispatch(createTaskAsync(params));
    dispatch(hideModal());
  };

  useEffect(() => {
    inputTitle.current.focus();
    inputTitle.current.value = "";
    inputBtn.current.disabled = true;
  }, [show]);

  return (
    <div>
      <h3>CREATE TASK</h3>
      <form onSubmit={handleSubmit}>
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
          SAVE
        </button>
      </form>
    </div>
  );
});
