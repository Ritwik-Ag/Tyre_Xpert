import React from 'react';
import { useForm } from 'react-hook-form';
import "./FeedbackForm.css";

function FeedbackForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5001/user/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.status === 200) {
        alert("Thank you for your feedback!");
        reset();  
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error while submitting feedback:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="feedback-form-container">
      <h2 className="feedback">F1 Racing Feedback Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="feedback-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </label>
        
        <label>
          Email:
          <input
            type="email"
            name="email"
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </label>
        
        <label>
          Favorite Team:
          <input
            type="text"
            name="favouriteteam"
            {...register('favouriteteam', { required: 'Favorite team is required' })}
            placeholder="e.g., Red Bull, Ferrari"
          />
          {errors.favouriteteam && <p>{errors.favouriteteam.message}</p>}
        </label>
        
        <label>
          Feedback:
          <textarea
            name="feedback"
            {...register('feedback', { required: 'Feedback is required' })}
            rows="4"
            placeholder="Tell us about your experience"
          />
          {errors.feedback && <p>{errors.feedback.message}</p>}
        </label>
        
        <label>
          Rating:
          <select
            name="rating"
            {...register('rating', { required: 'Rating is required' })}
          >
            <option value="">Select</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
          {errors.rating && <p>{errors.rating.message}</p>}
        </label>
        
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default FeedbackForm;