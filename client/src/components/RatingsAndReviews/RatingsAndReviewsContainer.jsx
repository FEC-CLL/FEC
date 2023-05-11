import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './stylesRR.css';
import ReviewList from './ReviewList';
import LoadMoreReviews from './LoadMoreReview';
import AddReview from './AddReview';
import ReviewSorting from './ReviewSorting';

function RatingsAndReviewsContainer({ initProd }) {
  const [allReviews, setAllReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [reviewNum, setReviewNum] = useState(0);
  const [sortType, setSortType] = useState('relevant');

  useEffect(() => {
    if (initProd.id) {
      axios.get(`/reviews/${initProd.id}?page=${page}&sort="${sortType}"`)
        .then((response) => {
          console.log(response.data);
          setAllReviews(allReviews.concat(response.data.results));
          setReviewNum(response.data.results.length);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [initProd.id, page, sortType]);

  return (
    <div className="ratingsContainer">
      <div className="rrTitle">RATINGS & REVIEWS</div>
      <div className="rrContainer">
        <div className="ratings1Container" />
        <div className="reviewContainer">
          <ReviewSorting
            setSortType={setSortType}
            setPage={setPage}
            setAllReviews={setAllReviews}
            allReviews={allReviews}
          />
          <ReviewList allReviews={allReviews} />
          <LoadMoreReviews page={page} setPage={setPage} reviewNum={reviewNum} />
          <AddReview />
        </div>
      </div>
    </div>
  );
}

export default RatingsAndReviewsContainer;
