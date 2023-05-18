import React from 'react';
import Review from './Review';

function ReviewList({ allReviews }) {
  return (
    <div className="reviewList">
      {
        allReviews
          .map((review) => <Review review={review} key={review.review_id} />)
      }

    </div>
  );
}

export default ReviewList;
