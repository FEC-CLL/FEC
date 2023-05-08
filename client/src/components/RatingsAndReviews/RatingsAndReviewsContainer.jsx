import React from 'react';
import axios from 'axios'
import ReviewList from './ReviewList'

const RatingsAndReviewsContainer = () => {
  return (
    <div className='ratingsContainer'>
      <p>Ratings and Reviews</p>
      <ReviewList />
    </div>
  )}

export default RatingsAndReviewsContainer;