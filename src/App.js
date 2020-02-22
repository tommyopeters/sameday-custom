import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Product from "./components/Product";
import Productions from "./components/Productions";

import "./sass/main.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <SideNav />
        <div className="main">
          <Header />
          <Route path="/" component={Productions} exact />
          <Route path="/product/:id" component={Product} />
        </div>
      </div>
    </Router>
  );
}

export default App;
