import React, { useState } from 'react';
import "./FeedbackForm.css";

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    favoriteTeam: '',
    feedback: '',
    rating: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the submission here, such as sending data to an API or logging it
    console.log('Feedback Submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      favoriteTeam: '',
      feedback: '',
      rating: '',
    });
    alert('Thank you for your feedback!');
  };

  return (
    <div className="feedback-form-container">
      <h2 className="feedback">F1 Racing Feedback Form</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Favorite Team:
          <input
            type="text"
            name="favoriteTeam"
            value={formData.favoriteTeam}
            onChange={handleChange}
            placeholder="e.g., Red Bull, Ferrari"
          />
        </label>
        <label>
          Feedback:
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            rows="4"
            placeholder="Tell us about your experience"
            required
          />
        </label>
        <label>
          Rating:
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </label>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
