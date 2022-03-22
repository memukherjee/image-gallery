import React from "react";
import ImageBox from "./ImageBox";
import './styles/Column.css'

function Column(props) {

  return (
    <div className="column">
      {props.imageList
        .filter((img, i) => {
          return i >= props.start && i <= props.end;
        })
        .map((img) => {
          return <ImageBox key={img.key} isGray={props.isGray} setGray={props.setGray} openModal={props.openModal} url={img.url} title={img.title} tag={img.tag}/>;
        })}
    </div>
  );
}

export default Column;
