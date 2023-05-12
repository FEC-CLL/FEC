import React from 'react';
import Review from './Review';

function ReviewList({ allReviews }) {
  return (
    <div>
      {
        allReviews.map((review) => <Review review={review} />)
      }

    </div>
  );
}

export default ReviewList;
