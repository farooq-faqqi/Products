import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
const Home = () => {
  return (
    <div>
      <Navbar />
      <CocktailList />
      <Categories />
    </div>
  );
};

export default Home;
