import React from 'react';

function LoadMoreReviews({ count, setCount, reviewNum }) {
  const loadMoreReviewsOnClick = () => {
    setCount(count + 2);
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
