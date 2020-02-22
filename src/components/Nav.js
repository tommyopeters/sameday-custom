import React from "react";

import NotificationCounter from "./NotificationCounter";

import MailIcon from "../assets/mail.svg";
import ShoppingCartIcon from "../assets/shopping-cart.svg";
// import Avatar from "../assets/profilepic.jpg"

const Nav = () => {
  return (
    <nav className="header-nav">
      <ul className="header-nav-list">
        <li className="header-nav-list_item">
          <span className="header-nav-list_item-icon">
            <img src={MailIcon} alt="" srcset="" />
            <NotificationCounter color="blue" value="1" />
          </span>
          <span>Message</span>
        </li>
        <li className="header-nav-list_item">
          <span className="header-nav-list_item-icon">
            <img src={ShoppingCartIcon} alt="" />
            <NotificationCounter color="blue" value="1" />
          </span>
          <span>
            Market Place <i className="fas fa-caret-down"></i>
          </span>
        </li>
        <li className="header-nav-list_item">
          <span className="header-nav-list_item-icon">
            <NotificationCounter color="blue" value="1" />
          </span>
          <span>Notifications</span>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
