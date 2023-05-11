/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
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
