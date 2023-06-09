/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ReviewHelpfulness from './ReviewHelpfulness';
import ReviewReport from './ReviewReport';
import ProductStar from '../Overview/ProductStar';

function Review({ review, reported, setReported }) {
  const date = new Date(review.date.slice(0, 10)).toLocaleString('en-us', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="review">
      <div className="reviewHeader">
        <div className="reviewRating">
          <ProductStar averageReview={review.rating} />
        </div>
        <div className="reviewReviewerName">
          by
          {' '}
          {review.reviewer_name}
          ,
        </div>
        <div className="reviewDate">{date}</div>
      </div>
      <div className="reviewSummary">{review.summary}</div>
      <div className="reviewBody">{review.body}</div>
      <div className="reviewRecommend">{review.recommend ? '\u2713 I recommend this product' : ''}</div>
      <div className="reviewPhotos">{review.photos.length ? review.photos.map((photo) => <ReviewPhoto photo={photo} />) : ''}</div>
      <div className="reviewResponse">{review.response ? review.response : ''}</div>
      <div className="reviewFooter">
        <ReviewHelpfulness review={review} />
        <div className="reviewFooterDivider">|</div>
        <ReviewReport review={review} reported={reported} setReported={setReported} />
      </div>
    </div>
  );
}

function ReviewPhoto({ photo }) {
  return (
    <div className="reviewPhoto">
      <img src={photo.url} className="answer-photo" />
    </div>
  );
}

export default Review;
