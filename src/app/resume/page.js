"use client";
import "./resume.css";

export default function Page() {
  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1_6gqGIZOLy5od6FBov-M5N2rzaFbtRKL/view",
      "_blank"
    );
  };

  return (
    <div className="resume">
      <div className="resume-title">my resume</div>
      <img
        src="celeste_resume_2024.png"
        alt="Resume"
        onClick={handleResumeClick}
        style={{ cursor: "pointer", borderRadius: "25px" }} // Optional: change the cursor to indicate it's clickable
      />
    </div>
  );
}
