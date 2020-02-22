import React from "react";
import NotificationCounter from "./NotificationCounter";

const SideNav = () => {
  return (
    <div className="side-nav">
      <div className="hamburger"></div>
      <ul className="side-nav_links">
        <li className="side-nav-link">Dashboard</li>
        <li className="side-nav-link">Operations</li>
        <li className="side-nav-link">Records</li>
        <li className="side-nav-link">Supply Store</li>
        <li className="side-nav-link">Market Place</li>
        <li className="side-nav-link">
          Forums <NotificationCounter color="red" value={1} />
        </li>
      </ul>
      <div className="settings">Settings</div>
    </div>
  );
};

export default SideNav;
