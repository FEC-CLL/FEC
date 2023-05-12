import React from 'react';

function LoadMoreReviews({ page, setPage, reviewNum }) {
  const loadMoreReviewsOnClick = () => {
    setPage(page + 1);
  };

  return (
    <div id="loadMoreReviews">
      {reviewNum >= 2 ? (
        <button
          type="button"
          id="loadMoreReviewsButton"
          onClick={() => {
            loadMoreReviewsOnClick();
          }}
        >
          MORE REVIEWS
        </button>
      ) : ''}
    </div>
  );
}

export default LoadMoreReviews;
