/* eslint-disable no-useless-escape */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';
import OverallRating from './OverallRating';
import ProductRecommendation from './ProductRecommendation';
import ProductCharacteristics from './ProductCharacteristics';
import ReviewSummary from './ReviewSummary';
import ReviewBody from './ReviewBody';
import ReviewNickname from './ReviewNickname';
import ReviewEmail from './ReviewEmail';
import AddReviewPhotos from './AddReviewPhotos';

function AddReview({ initProd, metaData, setShowDialog }) {
  const [overallRating, setOverallRating] = useState('');
  const [recommend, setRecommend] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const [reviewSummary, setReviewSummary] = useState('');
  const [reviewNickname, setReviewNickname] = useState('');
  const [reviewEmail, setReviewEmail] = useState('');
  const [size, setSize] = useState('');
  const [width, setWidth] = useState('');
  const [comfort, setComfort] = useState('');
  const [quality, setQuality] = useState('');
  const [length, setLength] = useState('');
  const [fit, setFit] = useState('');
  const [photos, setPhotos] = useState([]);

  const char = metaData.characteristics;
  const charsObj = {};
  if (char) {
    if (size && char.Size) { charsObj[char.Size.id] = size * 1; }
    if (width && char.Width) { charsObj[char.Width.id] = width * 1; }
    if (comfort && char.Comfort) { charsObj[char.Comfort.id] = comfort * 1; }
    if (quality && char.Quality) { charsObj[char.Quality.id] = quality * 1; }
    if (length && char.Length) { charsObj[char.Length.id] = length * 1; }
    if (fit && char.Fit) { charsObj[char.Fit.id] = fit * 1; }
  }

  const onSubmitClick = (event) => {
    event.preventDefault();
    const data = {
      product_id: initProd.id,
      rating: overallRating * 1,
      summary: reviewSummary,
      body: reviewBody,
      recommend,
      name: reviewNickname,
      email: reviewEmail,
      photos,
      characteristics: charsObj,
    };

    axios.post('/reviews', data)
      .then(() => {
        console.log('Review submitted');
      })
      .catch((err) => {
        console.log('Error', err);
      });

    setShowDialog(false);
  };

  /// ///////////////////////
  return (
    <div className="AddReviewModal content">
      <h4 className="reviewHeader1 modal-title">Write Your Review</h4>
      <div className="reviewHeader2 modal-subtitle">
        About the
        {' '}
        {initProd.name}
      </div>
      <form onSubmit={onSubmitClick}>
        <OverallRating overallRating={overallRating} setOverallRating={setOverallRating} />
        <br />
        <ProductRecommendation recommend={recommend} setRecommend={setRecommend} />
        <br />
        <ProductCharacteristics
          char={char}
          charProp={{
            setSize,
            setWidth,
            setComfort,
            setQuality,
            setLength,
            setFit,
            size,
            width,
            comfort,
            quality,
            length,
            fit,
          }}
        />
        <br />
        <ReviewSummary setReviewSummary={setReviewSummary} />
        <br />
        <ReviewBody setReviewBody={setReviewBody} />
        <br />
        <AddReviewPhotos setPhotos={setPhotos} />
        <br />
        <ReviewNickname setReviewNickname={setReviewNickname} />
        <br />
        <ReviewEmail setReviewEmail={setReviewEmail} />
        <br />
        <div className="reviewButtons">
          <button type="button" id="cancelButton" className="buttonRR" onClick={() => setShowDialog(false)}>CANCEL</button>
          <button type="submit" id="submitButton" className="buttonRR">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default AddReview;
