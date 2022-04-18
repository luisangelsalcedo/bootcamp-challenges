import { createContext, useMemo, useState } from "react";
import { Modal } from "../Modal";

export const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [viewModal, setViewModal] = useState("");

  const openModal = (view) => {
    setShowModal(true);
    setViewModal(view);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const valueMemo = useMemo(
    () => ({
      openModal,
      closeModal,
    }),
    [showModal]
  );

  return (
    <ModalContext.Provider value={valueMemo}>
      <Modal show={showModal} handler={closeModal}>
        {viewModal}
      </Modal>
      {children}
    </ModalContext.Provider>
  );
};
