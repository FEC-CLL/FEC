import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './stylesRR.css';
import ReviewList from './ReviewList';
import LoadMoreReviews from './LoadMoreReview';

function RatingsAndReviewsContainer({ initProd }) {
  const [allReviews, setAllReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [reviewNum, setReviewNum] = useState(0);

  useEffect(() => {
    if (initProd.id) {
      axios.get(`/reviews/${initProd.id}?page=${page}&sort="newest"`)
        .then((response) => {
          console.log(response.data);
          setAllReviews(allReviews.concat(response.data.results));
          setReviewNum(response.data.results.length);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [initProd.id, page]);

  return (
    <div className="ratingsContainer">
      <div className="rrTitle">RATINGS & REVIEWS</div>
      <div className="rrContainer">
        <div className="ratings1Container"></div>
        <div className="reviewContainer">
          <ReviewList allReviews={allReviews} />
          <LoadMoreReviews page={page} setPage={setPage} reviewNum={reviewNum} />
        </div>
      </div>
    </div>
  );
}

export default RatingsAndReviewsContainer;
