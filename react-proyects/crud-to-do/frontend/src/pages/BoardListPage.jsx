import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../components/Loader";
import { BoardList } from "../components/BoardList";

import { loadBoardsByUserAsync } from "../redux/actions/board.actions";
import { showModal } from "../redux/actions/modal.actions";

export const BoardListPage = React.memo(() => {
  const auth = useSelector(state => state.auth);
  const { boardsList, loading } = useSelector(state => state.board);

  const dispatch = useDispatch();

  useEffect(() => {
    const boardCount = boardsList.length;
    !boardCount && dispatch(loadBoardsByUserAsync(auth));
  }, []);

  return (
    <div className="boards">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="boards-header">
            <h3 className="text-violet">
              <i className="fa fa-th-large fa-2x" aria-hidden="true"></i>{" "}
              PERSONAL BOARD
            </h3>

            <button
              className="btn btn-icon btn-icon-left"
              onClick={() =>
                dispatch(
                  showModal({ color: "violet", element: "BoardFormPage" })
                )
              }
            >
              <i className="fa fa-plus-square-o" aria-hidden="true"></i> NEW
              BOARD
            </button>
          </div>

          <div>
            <BoardList
              arr={boardsList.filter(
                ({ owner }) => JSON.stringify(owner) === JSON.stringify(auth.id)
              )}
            />
          </div>

          <h3 className="text-blueviolet">
            <i className="fa fa-users fa-2x" aria-hidden="true"></i> ASSIGNED
            BOARD
          </h3>

          <div>
            <BoardList
              arr={boardsList.filter(
                ({ owner }) => JSON.stringify(owner) !== JSON.stringify(auth.id)
              )}
            />
          </div>
        </>
      )}
    </div>
  );
});
