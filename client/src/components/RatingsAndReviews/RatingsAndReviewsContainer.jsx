import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './stylesRR.css';
import ReviewList from './ReviewList';
import LoadMoreReviews from './LoadMoreReview';
import ModalDialog from './AddReview/ModalDialog';
import ReviewSorting from './ReviewSorting';
import RatingOverall from './Ratings/RatingOverall';

function RatingsAndReviewsContainer({ initProd }) {
  const [metaData, setMetaData] = useState({});
  const [allReviews, setAllReviews] = useState([]);
  const [count, setCount] = useState(2);
  const [reviewNum, setReviewNum] = useState(0);
  const [sortType, setSortType] = useState('relevant');
  const [showDialog, setShowDialog] = useState(false);
  const [reported, setReported] = useState(0);

  const starsState = {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
  };
  const [starsFilter, setStarsFilter] = useState(starsState);
  const filteredReviews = allReviews.filter((review) => starsFilter[review.rating.toString()]);

  useEffect(() => {
    if (initProd.id) {
      axios.get(`/reviews/${initProd.id}?count=${count}&sort=${sortType}`)
        .then((response) => {
          setAllReviews(response.data.results);
          setReviewNum(response.data.results.length);
        })
        .catch((err) => {
          console.error(err);
        });

      axios.get(`/reviews/metadata/${initProd.id}`)
        .then((response) => {
          setMetaData(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [initProd.id, count, sortType, reported]);

  return (
    <div className="ratingsContainer">
      <div className="rrTitle">RATINGS & REVIEWS</div>
      <div className="rrContainer">
        <div className="ratings1Container">
          <RatingOverall
            metaData={metaData}
            starsFilter={starsFilter}
            setStarsFilter={setStarsFilter}
          />
        </div>
        <div className="reviewContainer">
          <ReviewSorting
            setSortType={setSortType}
            allReviews={filteredReviews}
          />
          <ReviewList allReviews={filteredReviews} reported={reported} setReported={setReported} />
          <div className="reviewFooterButtons">
            <LoadMoreReviews count={count} setCount={setCount} reviewNum={reviewNum} />
            <button type="button" className="buttonRR" id="addReviewButton" onClick={() => setShowDialog(true)}>ADD REVIEW</button>
          </div>
          <ModalDialog
            initProd={initProd}
            metaData={metaData}
            showDialog={showDialog}
            setShowDialog={setShowDialog}
          />
        </div>
      </div>
    </div>
  );
}

export default RatingsAndReviewsContainer;
