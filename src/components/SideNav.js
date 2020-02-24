import React from "react";
import NotificationCounter from "./NotificationCounter";

import Dashboard from "../assets/group-1717.svg";
import Clock from "../assets/time-left.svg";
import File from "../assets/file.svg";
import Cart from "../assets/shopping-cart-1.svg";
import Supply from "../assets/supply.svg";
import Chat from "../assets/chat.svg";
import Settings from "../assets/settings.svg";

const SideNav = () => {
  return (
    <div className="side-nav">
      <div className="hamburger">
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </div>
      <ul className="side-nav_links">
        <li className="side-nav-link">
          <span className="side-nav-link-icon">
            <object data={Dashboard} type="">
              Dashboard
            </object>
          </span>
          <span className="side-nav-link-text">Dashboard</span>
        </li>
        <li className="side-nav-link">
          <span className="side-nav-link-icon">
            <object data={Clock} type="">
              Operations
            </object>
          </span>
          <span className="side-nav-link-text">Operations</span>
        </li>
        <li className="side-nav-link">
          <span className="side-nav-link-icon">
            <object data={File} type="">
              Records
            </object>
          </span>
          <span className="side-nav-link-text">Records</span>
        </li>
        <li className="side-nav-link">
          <span className="side-nav-link-icon">
            <object data={Cart} type="">
              Supply Store
            </object>
          </span>
          <span className="side-nav-link-text">Supply Store</span>
        </li>
        <li className="side-nav-link">
          <span className="side-nav-link-icon">
            <object data={Supply} type="">
              Market Place
            </object>
          </span>
          <span className="side-nav-link-text">Market Place</span>
        </li>
        <li className="side-nav-link">
          <span className="side-nav-link-icon">
            <object data={Chat} type="">
              Forums
            </object>
          </span>
          <span className="side-nav-link-text">Forums</span>{" "}
          <NotificationCounter color="red" value={1} />
        </li>
      </ul>
      <div className="settings">
        <span className="settings-icon">
          <object data={Settings} type="">
            Settings
          </object>
        </span>
        <span className="settings-text">Settings</span>
      </div>
    </div>
  );
};

export default SideNav;
