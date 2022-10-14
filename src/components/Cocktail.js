import React from "react";
import { Link } from "react-router-dom";
import Ratings from "./Ratings";

const Cocktail = ({ img, price, id, name, brand, rating }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={img} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h4>{name}</h4>
        <h5>${price}</h5>
        <Ratings value={rating} />
        <p>{brand}</p>
        <Link to={`/product/${id}`} className="btn btn-primary">
          Details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
