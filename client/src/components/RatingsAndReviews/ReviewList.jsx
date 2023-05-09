import React, { useState } from 'react';
import axios from 'axios';
import Review from './Review';

function ReviewList({allReviews}) {

  //{allReviews.results.length > 2 ? <button id="addReview">Add Review</button> : ''}

  return (
    <div>
      {
        allReviews.map((review) => <Review review={review} />)
      }

    </div>
  );
}

export default ReviewList;
