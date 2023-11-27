import React from "react";
import ReactDom from "react-dom";

import "./Modal.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClick}></div>;
};


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

export default Modal;
