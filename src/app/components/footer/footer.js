"use client";

import "./footer.css";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/celestiaah", "_blank");
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/celeste-huang/", "_blank");
  };
  return (
    <div className="footer">
      <div className="social-button-container">
        <div onClick={handleInstagramClick} className="social-button">
          <FaInstagram />
        </div>
        <div onClick={handleLinkedInClick} className="social-button">
          <TiSocialLinkedin />
        </div>
      </div>
    </div>
  );
}
