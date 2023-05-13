/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import Review from './Review';

function ReviewList({ allReviews }) {
  return (
    <div>
      {
        allReviews.map((review) => <Review review={review} key={review.review_id} />)
      }

    </div>
  );
}

export default ReviewList;
