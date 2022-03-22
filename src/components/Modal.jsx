import React from "react";
import ImageContainer from "./ImageContainer";

function Modal(props) {
  const image = props.modalImg;

const show = {
  top: "3%",
  opacity: "1"
}

  return (
    <div id="myModal" style={props.isModal?show:null} className="modal">
      <ImageContainer closeModal={props.closeModal} image = {image} />
    </div>
  );
}

export default Modal;
