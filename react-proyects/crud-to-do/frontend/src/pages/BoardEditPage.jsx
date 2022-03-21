import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBoardAsync,
  updateBoardAsync,
} from "../redux/actions/board.actions";
import { hideModal } from "../redux/actions/modal.actions";

export const BoardEditPage = React.memo(({ board }) => {
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
    dispatch(
      updateBoardAsync({
        boardID: board._id,
        board: { title: inputTitle.current.value },
        token,
      })
    );
    dispatch(hideModal());
  };

  const handleDeleteBoard = () => {
    dispatch(
      deleteBoardAsync({
        boardID: board._id,
        token,
      })
    );
    dispatch(hideModal());
  };

  useEffect(() => {
    inputTitle.current.focus();
    inputTitle.current.value = board.title;
  }, [show]);

  return (
    <div>
      <h3>UPDATE BOARD</h3>
      <form onSubmit={handleSubmit} className="inline">
        <div className="formInput">
          <input
            ref={inputTitle}
            type="text"
            required={true}
            onChange={handleChange}
            placeholder="Board name"
          />
        </div>

        <button ref={inputBtn} className="btn btn-success" onClick={() => {}}>
          UPDATE
        </button>
      </form>

      <button
        ref={inputBtn}
        className="btn btn-icon btn-icon-left"
        onClick={handleDeleteBoard}
      >
        <i className="fa fa-trash" aria-hidden="true"></i> DELETE THIS BOARD
      </button>
    </div>
  );
});
