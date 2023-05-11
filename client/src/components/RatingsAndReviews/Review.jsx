/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ReviewHelpfulness from './ReviewHelpfulness';
import ReviewReport from './ReviewReport';

function Review({ review }) {
  return (
    <div className="review">
      <div className="reviewHeader">
        <div className="reviewRating">{review.rating}</div>
        <div className="reviewReviewerName">
          {review.reviewer_name}
          ,
        </div>
        <div className="reviewDate">{review.date}</div>
      </div>
      <div className="reviewSummary">{review.summary}</div>
      <div className="reviewBody">{review.body}</div>
      <div className="reviewRecommend">{review.recommend ? 'I recommend this ptoduct' : ''}</div>
      <div className="reviewPhotos">{review.photos.length ? review.photos.map((photo) => <ReviewPhoto photo={photo} />) : ''}</div>
      <div className="reviewResponse">{review.response ? review.response : ''}</div>
      <div className="reviewFooter">
        <ReviewHelpfulness review={review} />
        <ReviewReport review={review} />
      </div>
    </div>
  );
}

function ReviewPhoto({ photo }) {
  return (
    <div className="reviewPhoto">
      <img src={photo.url} width="200" height="200" />
    </div>
  );
}

export default Review;
