import React from "react";

import NotificationCounter from "./NotificationCounter";

import MailIcon from "../assets/mail.svg";
import ShoppingCartIcon from "../assets/shopping-cart.svg";
import SearchIcon from "../assets/magnifying-glass.svg";
import ProfilePic from "../assets/profile-pic.jpg";
// import Avatar from "../assets/profilepic.jpg"

const Nav = () => {
  return (
    <nav className="header-nav">
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
      <ul className="header-nav-list">
        <li className="header-nav-list_item">
          <span className="header-nav-list_item-icon">
            <img src={MailIcon} alt="" />
            <NotificationCounter color="blue" value="1" />
          </span>
          <span className="header-nav-list_item-text">Message</span>
        </li>
        <li className="header-nav-list_item">
          <span className="header-nav-list_item-icon">
            <img src={ShoppingCartIcon} alt="" className="market-icon" />
            <NotificationCounter color="blue" value="15" />
          </span>
          <span className="header-nav-list_item-text">
            Market Place <i className="fas fa-caret-down"></i>
          </span>
        </li>
        <li className="header-nav-list_item">
          <span className="header-nav-list_item-icon">
            <div className="notif-board">
              <span className="notif-board-item">
                <span className="notif-board-circle"></span>
                <span className="notif-board-bar medium"></span>
              </span>
              <span className="notif-board-item">
                <span className="notif-board-circle"></span>
                <span className="notif-board-bar short"></span>
              </span>
              <span className="notif-board-item">
                <span className="notif-board-circle"></span>
                <span className="notif-board-bar long"></span>
              </span>
            </div>
            <NotificationCounter color="blue" value="1" />
          </span>
          <span className="header-nav-list_item-text">Notifications</span>
        </li>
      </ul>
      <div className="header-profile">
        <div className="header-profile_avatar">
          <img src={ProfilePic} alt="" />
        </div>
        <span className="header-profile_name">
          Me <i className="fas fa-caret-down"></i>
        </span>
      </div>
    </nav>
  );
};

export default Nav;
