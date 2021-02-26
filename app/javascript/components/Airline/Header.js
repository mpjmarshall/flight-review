import React from "react";

const Header = (props) => {
  const { name, image_url, avg_score } = props.attributes;
  const total = props.reviews.length;
  return (
    <div className="wrapper">
      <h1>
        <img src={image_url} height="50" width="50" alt={name} /> {name}
      </h1>

      <div>
        <div className="totalReviews">{total} User Reviews</div>
        <div className="starRating"></div>
        <div className="totalOutOf">Scores {avg_score} out of 5</div>
      </div>
    </div>
  );
};

export default Header;
