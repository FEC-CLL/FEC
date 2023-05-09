import React, { useState } from 'react';

function Review({ review }) {
  return (
    <div className="review">
      <div className="reviewHeader">
        <div className="reviewRating">{review.rating}</div>
        <div className="reviewReviewerName">{review.reviewer_name},</div>
        <div className="reviewDate">{review.date}</div>
      </div>
      <div className="reviewSummary">{review.summary}</div>
      <div className="reviewBody">{review.body}</div>
      <div className="reviewResponse">{review.response ? review.response : ''}</div>
      <div className="reviewFooter">
        <div>Helpful?</div>
        <div>Yes</div>
        <div>({review.helpfulness})</div>
        <div className="reviewReport">Report</div>
      </div>
    </div>
  );
}

export default Review;
