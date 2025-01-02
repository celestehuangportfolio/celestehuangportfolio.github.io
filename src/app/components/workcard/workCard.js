"use client";

import "./workcard.css";

export default function WorkCard({ element, videoTitle, videoDescription }) {
  return (
    <div className="workcard-container">
      <div className="workcard">{element}</div>
      <br />
      <div className="workcard-title">{videoTitle}</div>
      <br />
      <p className="workcard-description">{videoDescription}</p>
    </div>
  );
}
