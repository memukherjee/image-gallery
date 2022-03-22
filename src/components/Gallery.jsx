import React, {useState} from "react";
import Column from "./Column";
import './styles/Gallery.css'

function Gallery(props) {
  const noOfImages = props.imageList.length;
  const perCol = parseInt(noOfImages / 4);
  let rest = noOfImages % 4;
  const arr = [1, 2, 3, 4];
  let s = 0;
  let l = 0;
  //console.log(perCol,rest);
  //console.log(props.imageList);


  const [isGray, setGray] = useState(false)



  return (
    <div style={{filter: props.isModal && "blur(5px)"}} className="gallery">
      {arr.map((e, index) => {
        s = l;
        l = s + perCol + (rest > 0 ? 1 : 0);
        rest--;
        //console.log(s,l);
        return (
          <Column key={e} isGray={isGray} setGray={setGray} openModal={props.openModal} imageList={props.imageList} start={s} end={l - 1} />
        );
      })}
    </div>
  );
}

export default Gallery;
