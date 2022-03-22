import React from "react";

function ImageData(props) {
  return (
    <div className="image-data">
      <span onClick={props.closeModal} className="close">
        &times;
      </span>
      <h1 className="image-title">{props.image.title}</h1>
      {props.image.tags.map((tag, index) => {
        return (
          <p key={index} className="tags">
            #{tag}
          </p>
        );
      })}
      <a
        className="go-to-url"
        target="_blank"
        rel="noreferrer"
        href={props.image.url}
      >
        Show Image
      </a>
    </div>
  );
}

export default ImageData;
