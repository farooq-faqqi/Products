import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://dummyjson.com/products";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}`);
      const data = await response.json();
      const { products } = data;
      // console.log(data)
      if (products) {
        const newProducts = products.map((item) => {
          const {
            id,
            rating,
            title,
            brand,
            price,
            description,
            thumbnail,
            images,
          } = item;
          return {
            id: id,
            name: title,
            brand: brand,
            rating: rating,
            desc: description,
            price: price,
            images: images,
            img: thumbnail,
          };
        });
        setProducts(newProducts);
      } else {
        setProducts([]);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        products,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
