import React, { useState } from "react";
import { Modal as BootstrapModal } from "react-bootstrap";

export const ModalContext = React.createContext();

const Modal = ({ children }) => {
  const [content, setContent] = useState(null);
  const isOpen = !!content;

  const showModal = (content) => {
    setContent(content);
  };

  const hideModal = () => {
    setContent(null);
  };

  return (
    <ModalContext.Provider value={{ isOpen, showModal, hideModal }}>
      <BootstrapModal show={isOpen} onHide={hideModal}>
        {content}
      </BootstrapModal>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = React.useContext(ModalContext);

  if (!context) {
    throw new Error("We could not find a Modal context");
  }

  return context;
};

export default Modal;
