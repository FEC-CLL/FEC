import React, { useState } from 'react';
import axios from 'axios';

function LoadMoreReviews({page, setPage, reviewNum}) {
  return (
    <div id="loadMoreReviews">
      {reviewNum >= 2 ? (<button type="button" id="loadMoreReviewsButton">More Reviews</button>) : ''}
    </div>
  );
}

export default LoadMoreReviews;
