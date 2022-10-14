import React from "react";
import { useState, useEffect, useParams } from "react";

const ImageFlexi = ({ image }) => {
  return (
    <>
      <div className="left">
        <div className="left__1">
          <div className="images">
            <img src={image} />
          </div>
        </div>
        <div className="left__2">
          <img src={image} />
        </div>
      </div>
      <div className="right"></div>
    </>
  );
};

export default ImageFlexi;
