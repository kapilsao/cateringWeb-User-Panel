import React, { useState } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';

function RatingForm() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState('');
  const catererId = localStorage.getItem("caterer_id")
  const userId = localStorage.getItem("User_id")

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const userId = 'user-id-placeholder'; // Replace with logged-in user's ID
      await axios.post(`http://localhost:5001/api/rating/post`, { catererId, userId, rating, comment });
      alert('Rating submitted successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to submit rating.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-32">
      <h3 className="text-xl font-bold text-center mb-4">Rate This Caterer</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Star Rating */}
        <div className="flex justify-center items-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={`cursor-pointer text-2xl ${
                star <= (hover || rating) ? 'text-yellow-500' : 'text-gray-300'
              }`}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
            />
          ))}
        </div>
        {/* Textarea for Comment */}
        <textarea
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment here..."
          rows="4"
          required
        ></textarea>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-200"
          onClick={handleSubmit}
        >
          Submit Rating
        </button>
      </form>
    </div>
  );
}

export default RatingForm;
