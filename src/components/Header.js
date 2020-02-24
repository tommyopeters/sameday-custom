import React from "react";

import Nav from "./Nav";

import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <div className="header-logo_container">
          <img src={Logo} alt=""></img>
        </div>
      </div>

      <Nav />
    </div>
  );
};

export default Header;
