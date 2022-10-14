import React from "react";
import CocktailList from "./components/CocktailList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
// import components
import ImageStructure from "./components/ImageStructure";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/product/:id">
          <SingleCocktail />
        </Route>
        <Route path="/new-app">
          <ImageStructure />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
