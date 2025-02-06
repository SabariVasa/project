import React, { useState, useEffect } from "react";
import "./Home.css"; // Import the CSS file for styling

const Home = () => {
  const images = [
    "/assets/slider1.jpg",
    "/assets/slider2.jpg",
    "/assets/slider5.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  // New slider functionality
  const newSliderImages = [
    "/assets/image1.jpg",
    "/assets/image2.jpg",
    "/assets/image3.jpg",
  ];

  const [newSliderIndex, setNewSliderIndex] = useState(0);

  // Handle next and previous buttons for manual navigation
  const handleNext = () => {
    setNewSliderIndex((prevIndex) => (prevIndex + 1) % newSliderImages.length);
  };

  const handlePrev = () => {
    setNewSliderIndex(
      (prevIndex) => (prevIndex - 1 + newSliderImages.length) % newSliderImages.length
    );
  };

  // Automatic image change for new slider
  useEffect(() => {
    const interval = setInterval(() => {
      setNewSliderIndex((prevIndex) => (prevIndex + 1) % newSliderImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [newSliderImages.length]);

  // Dynamic Content Section
  const dynamicContent = [
    {
      title: "Our Services",
      content:
        "We offer premium services in photography and cinematography. Whether it's for weddings, corporate events, or personal shoots, we ensure every moment is captured beautifully.",
    },
    {
      title: "Creative Team",
      content:
        "Our team of creative professionals works tirelessly to bring your vision to life. We are passionate about what we do and always strive to deliver the best results.",
    },
    {
      title: "Customer Satisfaction",
      content:
        "Customer satisfaction is our top priority. We aim to exceed expectations, making sure every client is happy with the final product and the experience we provide.",
    },
  ];

  const [currentDynamicIndex, setCurrentDynamicIndex] = useState(0);

  // Change dynamic content automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDynamicIndex((prevIndex) => (prevIndex + 1) % dynamicContent.length);
    }, 4000); // Change content every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [dynamicContent.length]);

  return (
    <div>
      {/* Original Slider Section */}
      <div className="slider">
        <div
          className="slide"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
          }}
        ></div>
      </div>
      {console.log(images[currentImageIndex])}
      {/* 3 Images Section */}
      <div className="image-gallery">
        <div className="image-item">
          <img src="/assets/image1.jpg" alt="Image 1" />
        </div>
        <div className="image-item">
          <img src="/assets/image2.1.jpg" alt="Image 2" />
        </div>
        <div className="image-item">
          <img src="/assets/image3.jpg" alt="Image 3" />
        </div>
      </div>

      {/* Paragraph Section with Button */}
      <div className="paragraph-section">
        <p>
          Discover a beautiful collection of stunning images that capture the
          essence of creativity. Let each photo tell a unique story through its
          vibrant colors and composition.
        </p>
        <button className="view-gallery-btn">View Gallery</button>
      </div>

      {/* Video and Paragraph Section */}
      <div className="video-section">
        <div className="video-container">
          <video controls>
            <source src="/assets/wedding-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="text-container">
          <h2>Wedding Films</h2>
          <p>
            Our wedding day was filled with love and joy, a celebration of the
            beautiful bond we share. Surrounded by family and friends, we
            exchanged vows that will last a lifetime. The day was a perfect
            reflection of our journey together, filled with laughter, tears,
            and unforgettable memories. Every moment was magical, and we are
            excited for the adventures ahead. Thank you to everyone who made
            this day so special. We felt blessed to have everyone by our side,
            sharing in our happiness. The wedding was not just the joining of
            two hearts, but the coming together of families and friends.
          </p>
          <button className="watch">Watch Us</button>
        </div>
      </div>

      

      {/* Awards Section (Left Text, Right Awards) */}
      <div className="awards-section">
        <div className="awards-text">
          <h2>Awards</h2>
          <p>
            We take pride in being recognized for our outstanding work in
            photography and cinematography.
          </p>
        </div>
      </div>

      {/* New Slider Section with Forward and Backward Buttons */}
      <div className="new-slider">
        <button className="prev-button" onClick={handlePrev}>
          &#10094;
        </button>
        <div
          className="slide"
          style={{
            backgroundImage: `url(${newSliderImages[newSliderIndex]})`,
          }}
        ></div>
        <button className="next-button" onClick={handleNext}>
          &#10095;
        </button>
      </div>

      {/* Why Studio A Section */}
      <div className="why-studio-a">
        <div className="left-heading">
          <h2>Why Studio A?</h2>
        </div>
        <div className="right-text">
          <p>We capture your moments with creativity and passion, making them unforgettable.</p>
        </div>
      </div>

      {/* Dynamic Content Section */}
      <div className="dynamic-content-section">
        <div className="dynamic-content">
          <h2>{dynamicContent[currentDynamicIndex].title}</h2>
          <p>{dynamicContent[currentDynamicIndex].content}</p>
        </div>
      </div>

      {/* New Section: Other Services */}
      <div className="other-services">
        <h2>Other Services</h2>
        <div className="service-cards">
          <div className="card">
            <img src="/assets/image1.jpg" alt="Service 1" className="service-image" />
            <h3>Photography</h3>
            <p>Capture beautiful moments of your special day with our professional photography services.</p>
            <button>Visit Our Works</button>
          </div>
          <div className="card">
            <img src="/assets/image2.jpg" alt="Service 2" className="service-image" />
            <h3>Videography</h3>
            <p>Our team will create a stunning video that tells the story of your wedding day.</p>
            <button>Visit Our Works</button>
          </div>
          <div className="card">
            <img src="/assets/image3.jpg" alt="Service 3" className="service-image" />
            <h3>Editing</h3>
            <p>We offer expert photo and video editing to ensure your memories are beautifully preserved.</p>
            <button>Visit Our Works</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
