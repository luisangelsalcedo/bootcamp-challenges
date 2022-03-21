import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBoardAsync } from "../redux/actions/board.actions";
import { hideModal } from "../redux/actions/modal.actions";

export const BoardFormPage = React.memo(() => {
  const { token, id } = useSelector(state => state.auth);
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
      board: { title: inputTitle.current.value, owner: id },
    };

    dispatch(createBoardAsync(params));
    dispatch(hideModal());
  };

  useEffect(() => {
    inputTitle.current.focus();
    inputTitle.current.value = "";
    inputBtn.current.disabled = true;
  }, [show]);

  return (
    <div>
      <h3>CREATE BOARD</h3>
      <form onSubmit={handleSubmit}>
        <div className="formInput">
          <input
            ref={inputTitle}
            type="text"
            required={true}
            onChange={handleChange}
            placeholder="Board name"
          />
        </div>

        <button ref={inputBtn} className="btn btn-success">
          SAVE
        </button>
      </form>
    </div>
  );
});
