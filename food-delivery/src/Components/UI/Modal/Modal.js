import React from "react";
import ReactDom from "react-dom";

import "./Modal.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClick}></div>;
};
/*
const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}> 
          <div className="modal-content">
            <h2>Modal Title</h2>
            <div className={`${props.className}`}>{props.children}</div>;
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      );

}*/
const Modal = (props) => {
  if (props.isOpen !== undefined && !props.isOpen) {
    return null;
  }
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onClick={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <div className="modal">{props.children}</div>,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

/*  const ErrorModal = (props) => {
    return (
      <div>
        <div className={classes.backdrop} onClick={props.onConfirm} />
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
          </footer>
        </Card>
      </div>
    );
  };
  */
export default Modal;
