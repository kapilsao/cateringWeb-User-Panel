import { FaStar } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const StarRating = ({rating}) => {
  
  
 
  
  // Calculate the number of full stars
  const fullStars = Math.floor(rating);
  // Determine if there's a half star
  const hasHalfStar = rating % 1 !== 0;
  // Calculate the number of empty stars
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} className="w-4 h-4 text-white" />
      ))}
      {hasHalfStar && <FaStar className="w-4 h-4 text-white/50" />}
      {[...Array(emptyStars)].map((_, index) => (
        <FaStar key={index + fullStars + 1} className="w-4 h-4 text-white/20" />
      ))}
      <span className="ml-1">{rating.toFixed(1)}</span>
    </div>
  );
};

export default StarRating;
