import React from "react";

const Ratings = ({ value }) => {
  return (
    <div className="rating">
      <span style={{ color: "orange" }}>
        <i
          className={
            value >= 1
              ? "fa-sharp fa-solid fa-star"
              : value >= 0.5
              ? "fa-sharp fa-solid fa-star-half-stroke"
              : "fas fa-star"
          }
        ></i>
      </span>
      <span style={{ color: "orange" }}>
        <i
          className={
            value >= 2
              ? "fa-sharp fa-solid fa-star"
              : value >= 1.5
              ? "fa-sharp fa-solid fa-star-half-stroke"
              : "fas fa-star"
          }
        ></i>
      </span>
      <span style={{ color: "orange" }}>
        <i
          className={
            value >= 3
              ? "fa-sharp fa-solid fa-star"
              : value >= 2.5
              ? "fa-sharp fa-solid fa-star-half-stroke"
              : "fas fa-star"
          }
        ></i>
      </span>
      <span style={{ color: "orange" }}>
        <i
          className={
            value >= 4
              ? "fa-sharp fa-solid fa-star"
              : value >= 3.5
              ? "fa-sharp fa-solid fa-star-half-stroke"
              : "fas fa-star"
          }
        ></i>
      </span>
      <span style={{ color: "orange" }}>
        <i
          className={
            value >= 5
              ? "fa-sharp fa-solid fa-star"
              : value >= 4.047
              ? "fa-sharp fa-solid fa-star-half-stroke"
              : "fas fa-star"
          }
        ></i>
      </span>
    </div>
  );
};

export default Ratings;
