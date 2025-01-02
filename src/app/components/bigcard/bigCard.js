"use client";

import "./bigcard.css";

export default function BigCard({ element, title, description, direction }) {
  return (
    <div className="bigcard-container">
      {direction === "right" ? (
        <div className="flex-column">
          <div className="bigcard-title">{title}</div>
          <br />
          <p className="bigcard-description">{description}</p>
        </div>
      ) : (
        <div className="bigcard">{element}</div>
      )}
      {direction === "left" ? (
        <div className="flex-column">
          <div className="bigcard-title">{title}</div>
          <br />
          <p className="bigcard-description">{description}</p>
        </div>
      ) : (
        <div className="bigcard">{element}</div>
      )}
    </div>
  );
}
