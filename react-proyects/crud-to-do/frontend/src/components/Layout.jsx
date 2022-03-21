import React from "react";
import { Outlet } from "react-router-dom";

import { NavBar } from "./NavBar";
import { Logo } from "./Logo";
import { Alert } from "./Alert";
import { Modal } from "./Modal";
import { BoardFormPage } from "../pages/BoardFormPage";
import { BoardEditPage } from "../pages/BoardEditPage";
import { UsersListBoardPage } from "../pages/UsersListBoardPage";

import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../redux/actions/modal.actions";
import { TaskFormPage } from "../pages/TaskFormPage";
import { TaskEditPage } from "../pages/TaskEditPage";
import { UsersListTaskPage } from "../pages/UsersListTaskPage";

export const Layout = React.memo(() => {
  const { show, element, color } = useSelector(state => state.modal);
  const { currentEdit: currentEB } = useSelector(state => state.board);
  const { currentEdit: currentET } = useSelector(state => state.task);

  const dispatch = useDispatch();

  const handleHideModal = () => {
    dispatch(hideModal());
  };

  return (
    <>
      <header>
        <div className="container">
          <Logo />
          <NavBar />
          <Alert />
        </div>
      </header>
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Modal show={show} handleShow={handleHideModal} color={color}>
        {element === "BoardFormPage" && <BoardFormPage />}
        {element === "BoardEditPage" && <BoardEditPage board={currentEB} />}
        {element === "TaskFormPage" && <TaskFormPage />}
        {element === "TaskEditPage" && <TaskEditPage task={currentET} />}
        {element === "UsersListGuest" && (
          <UsersListBoardPage board={currentEB} />
        )}
        {element === "UsersListAsigned" && (
          <UsersListTaskPage task={currentET} />
        )}
      </Modal>
    </>
  );
});
