import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Loader } from "../components/Loader";
import { getBoardByIdAsync } from "../redux/actions/board.actions";
import { showModal } from "../redux/actions/modal.actions";
import { loadTasksByBoardAsync } from "../redux/actions/task.actions";
import { CardTask } from "./../components/CardTask";

export const BoardDetailPage = React.memo(() => {
  const { id: boardID } = useParams();
  const dispatch = useDispatch();

  const { token } = useSelector(state => state.auth);
  const { currentShow, loading: loadingB } = useSelector(state => state.board);
  const { loading: loadingT, tasksList } = useSelector(state => state.task);

  const arrayPending = useRef();
  arrayPending.current = tasksList?.filter(({ complete }) => !complete);

  const arrayComplete = useRef();
  arrayComplete.current = tasksList?.filter(({ complete }) => complete);

  useEffect(() => {
    dispatch(getBoardByIdAsync({ boardID, token }));
    dispatch(loadTasksByBoardAsync({ token, boardID }));
  }, []);

  return (
    <div className="board">
      {loadingB ? (
        <Loader />
      ) : (
        <>
          <div className="board-header">
            <h2>Board {currentShow?.title}</h2>
            <div>
              <button
                className="btn btn-icon btn-icon-left"
                onClick={() =>
                  dispatch(
                    showModal({ color: "warning", element: "TaskFormPage" })
                  )
                }
              >
                <i className="fa fa-plus-square-o" aria-hidden="true"></i> NEW
                TASK
              </button>
            </div>
          </div>

          {loadingT ? (
            <Loader />
          ) : (
            <div className="tasks-container">
              <div>
                <h5>PENDING TASK</h5>
                {!arrayPending.current.length ? (
                  "Empty"
                ) : (
                  <>
                    {arrayPending.current.map(task => (
                      <CardTask key={task._id} content={task} />
                    ))}
                  </>
                )}
              </div>
              <div>
                <h5>COMPLETE TASK</h5>
                {!arrayComplete.current.length ? (
                  "Empty"
                ) : (
                  <>
                    {arrayComplete.current.map(task => (
                      <CardTask key={task._id} content={task} />
                    ))}
                  </>
                )}
              </div>
            </div>
          )}
        </>
      )}
      <hr />
      <div className="boards-footer">
        <div>
          <small>
            Board create by <b>{currentShow?.owner?.name}</b>
          </small>
        </div>
        <div>
          {/* <button className="btn btn-icon btn-icon-left">
            <i className="fa fa-users" aria-hidden="true"></i> GUESTS
          </button> */}
        </div>
      </div>
    </div>
  );
});
