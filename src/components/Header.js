import React from "react";

import Nav from "./Nav";

import Logo from "../assets/logo.svg";
import SearchIcon from "../assets/magnifying-glass.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <div className="header-logo_container">
          <img src={Logo} alt=""></img>
        </div>
      </div>
      <div className="header-search">
        <div className="header-search-icon">
          <img src={SearchIcon} alt="search-icon"></img>
          <input
            type="text"
            name="header-search"
            className="header-search-icon-input"
            placeholder="Search"
          />
        </div>
      </div>
      <Nav />
      <div className="header-profile">
        <div className="header-profile_avatar">
          <img src="" alt="" srcset="" />
        </div>
        <span className="header-profile_name">
          Me <i className="fas fa-caret-down"></i>
        </span>
      </div>
    </div>
  );
};

export default Header;
