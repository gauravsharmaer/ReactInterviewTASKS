import React, { useState } from "react";
import "./App.css"
const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (starId) => {
    setRating(starId);
  };

  return (
    <div>
      {Array(5).map(( stridx) => (
        <span
          key={stridx}
          className={stridx < rating ? "filled" : ""}
          onClick={() => handleStarClick(stridx + 1)}
          style={{ cursor: "pointer" }}
        >
           ★
        </span>
      ))}
      <div>
        <p>Current Rating: {rating}</p>
      </div>
  
    </div>
  );
};

export default StarRating;




impo