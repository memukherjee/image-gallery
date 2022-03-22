import React, { useState } from "react";
import "./styles/Image.css";

function Image(props) {

  const [isColor, setColor] = useState(true)

  function mouseHover(event){
    props.setGray(true);
    setColor(false)
  }

  function mouseOut(event){
    props.setGray(false);
    setColor(true)
  }

  return (
    <div
      onClick={() => {
        const img = {
          url: props.url,
          title: props.title,
          tags: props.tag
        }
        props.openModal(img);
      }}
    >
      <img
        style={{ filter: props.isGray && isColor && "grayscale(100%)" }}
        src={props.url}
        alt={props.title}
        onMouseOver={mouseHover}
        onMouseOut={mouseOut}
      />
      <p className="image-name">{props.title}</p>
    </div>
  );
}

export default Image;
