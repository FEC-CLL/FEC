import React from 'react';
import Review from './Review';

function ReviewList({ allReviews, reported, setReported }) {
  return (
    <div className="reviewList">
      {
        allReviews.map((review) => (
          <Review
            review={review}
            reported={reported}
            setReported={setReported}
            key={review.review_id}
          />
        ))
      }

    </div>
  );
}

export default ReviewList;
