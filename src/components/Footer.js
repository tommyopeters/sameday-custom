import React from "react";

import AppleIcon from "../assets/apple.svg";
import PlaystoreIcon from "../assets/google-play-store.svg";
import Twitter from "../assets/twitter.svg";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="download">
        <h3>Download App</h3>
        <div className="app-icons">
          <object data={AppleIcon} type="" className="apple-icon">
            apple-icon
          </object>
          <object data={PlaystoreIcon} type="" className="playstore-icon">
            playstore-icon
          </object>
        </div>
      </div>
      <div className="info">
        <p className="info-text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
        </p>
        <div className="info-links">
          <ul>
            <li>
              <a href="https://www.samedaycustom.com/">Lorem ipsum dolor sit</a>
            </li>
            <li>
              <a href="https://www.samedaycustom.com/">Lorem ipsum dolor sit</a>
            </li>
            <li>
              <a href="https://www.samedaycustom.com/">Lorem ipsum dolor sit</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="connect">
        <h3>Connect with us</h3>
        <div className="social-links">
          <div className="social-links-item">
            <object data={Twitter} type="" className="twitter">
              Twitter
            </object>
          </div>
          <div className="social-links-item">
            <object data={Facebook} type="" className="facebook">
              Facebook
            </object>
          </div>
          <div className="social-links-item">
            <object data={Instagram} type="" className="instagram">
              Instagram
            </object>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
