/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';

function LoadMoreReviews({ page, setPage, reviewNum }) {
  const loadMoreReviewsOnClick = () => {
    setPage(page + 1);
  };

  if (reviewNum >= 2) {
    return (
      <button
        type="button"
        className="buttonRR"
        id="loadMoreReviewsButton"
        onClick={() => {
          loadMoreReviewsOnClick();
        }}
      >
        MORE REVIEWS
      </button>
    );
  }

  return null;
}

export default LoadMoreReviews;
