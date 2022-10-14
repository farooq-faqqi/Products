import React, { useEffect } from "react";
import { useState } from "react";

const url = "https://dummyjson.com/products/categories";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const getCategory = async () => {
    const res = await fetch(`${url}`);
    const data = await res.json();
    // const  {categories} = data;
    // setCategories(data);
    console.log(data);
  };
  useEffect(() => {
    getCategory();
  }, []);

  return <div></div>;
};

export default Categories;
