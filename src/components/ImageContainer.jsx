import React from 'react'
import ImageData from './ImageData'
import './styles/ImageContainer.css'

function ImageContainer(props) {
  return (
    <div className="image-container">
        <img src={props.image.url} alt={props.image.title} />
        <ImageData closeModal={props.closeModal} image = {props.image}/>
      </div>
  )
}

export default ImageContainer