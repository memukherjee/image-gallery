import React, { useState } from "react";
import './styles/SearchInput.css'

function SearchInput(props) {
  const [searchText, setSearchText] = useState("");

  function searchImage(e){
    const text = e.target.value
    setSearchText(text)
    props.filterImages(text)
  }

  return (
    <input
      style={{filter: props.isModal && "blur(5px)"}}
      onChange={searchImage}
      value={searchText}
      className="search-input"
      type="text"
      placeholder={props.placeholder}
    />
  );
}

export default SearchInput;
