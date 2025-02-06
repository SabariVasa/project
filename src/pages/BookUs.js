import React, { useState } from "react";
import "./BookUs.css"; // Import CSS file

const BookUs = () => {
  const [formData, setFormData] = useState({
    coupleName: "",
    email: "",
    contact: "",
    shootDate: "",
    shootType: "",
    location: "",
    hearAboutUs: "",
    additionalDetails: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.coupleName) newErrors.coupleName = "This field is required. Please fill in.";
    if (!formData.email) newErrors.email = "This field is required. Please fill in.";
    if (!formData.contact) newErrors.contact = "This field is required. Please fill in.";
    if (!formData.shootDate) newErrors.shootDate = "This field is required. Please choose date.";
    if (!formData.hearAboutUs) newErrors.hearAboutUs = "This field is required. Please fill in.";
    if (!formData.additionalDetails) newErrors.additionalDetails = "This field is required. Please fill in.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Booking request submitted successfully!");
      setFormData({
        coupleName: "",
        email: "",
        contact: "",
        shootDate: "",
        shootType: "",
        location: "",
        hearAboutUs: "",
        additionalDetails: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="bookus-container">
      <div className="form-card">
        <h2>Book Us</h2>
        <p>Fill in the details to book us for your special event.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Couple Name *</label>
            <input type="text" name="coupleName" value={formData.coupleName} onChange={handleChange} />
            {errors.coupleName && <span className="error">{errors.coupleName}</span>}
          </div>

          <div className="form-group">
            <label>Your Email-ID *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Your Contact No *</label>
            <input type="tel" name="contact" value={formData.contact} onChange={handleChange} />
            {errors.contact && <span className="error">{errors.contact}</span>}
          </div>

          <div className="form-group">
            <label>Main Shoot Date *</label>
            <input type="date" name="shootDate" value={formData.shootDate} onChange={handleChange} />
            {errors.shootDate && <span className="error">{errors.shootDate}</span>}
          </div>

          <div className="form-group">
            <label>Type of Shoot</label>
            <input type="text" name="shootType" value={formData.shootType} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Shoot Location</label>
            <input type="text" name="location" value={formData.location} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>How did you hear about us? *</label>
            <select name="hearAboutUs" value={formData.hearAboutUs} onChange={handleChange}>
              <option value="">Select an option</option>
              <option value="Facebook">Facebook</option>
              <option value="Instagram">Instagram</option>
              <option value="Friend or Relative">At a friend's or relative's wedding</option>
              <option value="Others">Others</option>
            </select>
            {errors.hearAboutUs && <span className="error">{errors.hearAboutUs}</span>}
          </div>

          <div className="form-group">
            <label>If there are any details we are missing, let us know *</label>
            <textarea name="additionalDetails" value={formData.additionalDetails} onChange={handleChange} maxLength="5000"></textarea>
            {errors.additionalDetails && <span className="error">{errors.additionalDetails}</span>}
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BookUs;
