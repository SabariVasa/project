import React, { useState } from "react";
import "./Gallery.css"; // Import CSS file

const images = [
  "/assets/gallery1.jpg",
  "/assets/gallery2.jpg",
  "/assets/gallery3.jpg",
  "/assets/gallery4.png",
  "/assets/gallery10.jpg",
  "/assets/gallery6.jpg",
  "/assets/gallery7.jpg",
  "/assets/gallery8.jpg",
  "/assets/gallery4.png",
  "/assets/gallery10.jpg",
  "/assets/gallery3.jpg",
  "/assets/gallery1.jpg",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item" onClick={() => openImage(src)}>
            <img src={src} alt={`Gallery ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>

      {/* Modal for Image Preview */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeImage}>
          <div className="modal-content">
            <img src={selectedImage} alt="Selected" className="modal-image" />
            <button className="close-button" onClick={closeImage}>✖</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
