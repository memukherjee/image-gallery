import React, { useState } from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import Modal from "./components/Modal";
import SearchInput from "./components/SearchInput";
import images from "./images";

function App() {
  const [imageList, setImageList] = useState(images);

  function filterImages(keyword) {
    setImageList(() => {
      return images.filter((img) => {
        return (
          img.title.toLowerCase().includes(keyword.toLowerCase()) ||
          img.tag.some((v) => v.includes(keyword))
        );
      });
    });
  }

  const [modalImg, setModalImg] = useState({
    url: "",
    title: "",
    tags: [],
  });

  const [isModal, setModal] = useState(false);

  function openModal(img) {
    setModalImg(img);
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  return (
    <>
      <SearchInput
        isModal={isModal}
        filterImages={filterImages}
        placeholder="type to search..."
      />
      <Gallery isModal={isModal} imageList={imageList} openModal={openModal} />
      <Modal isModal={isModal} modalImg={modalImg} closeModal={closeModal} />
    </>
  );
}

export default App;
