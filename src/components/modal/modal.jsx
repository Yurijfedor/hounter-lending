import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CloseButton, ModalWrapper, Backdrop } from "./modal.styled";

export const Modal = ({ children, onClose }) => {
  const handleClose = (e) => {
    e.stopPropagation();
    onClose();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return ReactDOM.createPortal(
    <ModalWrapper>
      <Backdrop />
      <CloseButton onClick={handleClose}></CloseButton>
      {children}
    </ModalWrapper>,
    document.body
  );
};
