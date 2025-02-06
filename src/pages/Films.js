import React from "react";
import "./Films.css"; // Import CSS file

const videos = [
  "/assets/video1.mp4",
  "/assets/video2.mp4",
  "/assets/wedding-video.mp4",
  "/assets/video1.mp4",
  "/assets/video2.mp4",
  "/assets/wedding-video.mp4",
  "/assets/video1.mp4",
  "/assets/video2.mp4",
  "/assets/wedding-video.mp4",
  "/assets/video1.mp4",
  "/assets/video2.mp4",
  "/assets/wedding-video.mp4",
];

const Films = () => {
  return (
    <div className="films-container">
      
      
      
      <div className="films-grid">
        {videos.map((src, index) => (
          <div key={index} className="film-item">
            <video controls>
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Films;
