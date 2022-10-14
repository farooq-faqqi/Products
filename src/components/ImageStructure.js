import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
const images = [
  "https://raw.githubusercontent.com/M74JJI/zoomslider/master/public/images/img1.jpg",
  "https://raw.githubusercontent.com/M74JJI/zoomslider/master/public/images/img2.jpg",
  "https://raw.githubusercontent.com/M74JJI/zoomslider/master/public/images/img3.jpg",
  "https://raw.githubusercontent.com/M74JJI/zoomslider/master/public/images/img4.jpg",
  "https://raw.githubusercontent.com/M74JJI/zoomslider/master/public/images/img5.jpg",
];
const ImageStructure = () => {
  const [img, setImg] = useState(images[0]);
  const hoverHandler = (image, i) => {
    setImg(image);
  };
  return (
    <>
      <Navbar />
      <div className="containers">
        <div className="left">
          <div className="left__1">
            {images.map((image, i) => (
              <div
                className="images"
                key={i}
                onMouseOver={() => hoverHandler(image, i)}
              >
                <img src={image} />
              </div>
            ))}
          </div>
          <div className="left__2">
            <img src={img} />
          </div>
        </div>
        <div className="right"></div>
      </div>
    </>
  );
};

export default ImageStructure;
