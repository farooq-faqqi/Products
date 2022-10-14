import React, { useContext } from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { products, loading } = useGlobalContext();
  // console.log(products)
  if (loading) {
    return <Loading />;
  }
  if (products.length < 1) {
    return <h2 className="section-title">No Products Available Rn.</h2>;
  }

  return (
    <section className="section">
      <h2 className="section-title">Products</h2>
      <div className="cocktails-center">
        {products.map((item) => {
          return (
            <div key={item.id}>
              <Cocktail {...item} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CocktailList;
