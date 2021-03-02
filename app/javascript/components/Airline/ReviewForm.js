import React from "react";

const ReviewForm = (props) => {
  return (
    <div className="wrapper">
      <form>
        <div>Have an expericence with [AirLine name]?</div>
        <div className="field">
          <input type="text" name="title" placeholder="Review Title" />
        </div>
        <div className="field">
          <input
            type="text"
            name="description"
            placeholder="Review description"
          />
        </div>
        <div className="field">
          <div className="rating-container">
            <div className="rating-title-text">Rate this airline</div>
            [Star rating goes here]
          </div>
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
