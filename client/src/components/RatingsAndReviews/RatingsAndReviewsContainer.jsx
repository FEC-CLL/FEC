import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './stylesRR.css';
import ReviewList from './ReviewList';
import LoadMoreReviews from './LoadMoreReview';
import ModalDialog from './AddReview/ModalDialog';
import ReviewSorting from './ReviewSorting';

function RatingsAndReviewsContainer({ initProd }) {
  const [metaData, setMetaData] = useState({});
  const [allReviews, setAllReviews] = useState([]);
  const [count, setCount] = useState(2);
  const [reviewNum, setReviewNum] = useState(0);
  const [sortType, setSortType] = useState('relevant');
  const [showDialog, setShowDialog] = useState(false);
  const [reported, setReported] = useState(0);

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
        <div className="ratings1Container" />
        <div className="reviewContainer">
          <ReviewSorting
            setSortType={setSortType}
            allReviews={allReviews}
          />
          <ReviewList allReviews={allReviews} reported={reported} setReported={setReported} />
          <div>
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
