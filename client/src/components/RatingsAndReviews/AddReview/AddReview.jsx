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

  const onSubmitClick = () => {
    const data = {
      product_id: initProd.id,
      rating: overallRating * 1,
      summary: reviewSummary,
      body: reviewBody,
      recommend,
      name: reviewNickname,
      email: reviewEmail,
      photos: [],
      characteristics: charsObj,
    };

    if ((Object.keys(char).length !== Object.keys(charsObj).length)
        || (!data.rating) || (!data.body) || (!data.recommend)
        || (!data.name) || (!data.email)) {
      alert('You must enter the following: mandatory fields');
    }

    if (data.body.length < 50) {
      alert('The review body is less than 50 characters');
    }

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(data.email)) {
      alert('The email address provided is not in correct email format');
    }

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
      <div className="AddReviewText1">Write Your Review</div>
      <div className="AddReviewText2">
        About the
        {' '}
        {initProd.name}
      </div>
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
      <ReviewNickname setReviewNickname={setReviewNickname} />
      <br />
      <ReviewEmail setReviewEmail={setReviewEmail} />
      <br />
      <button type="button" id="submitButton" className="buttonRR" onClick={onSubmitClick}>SUBMIT</button>
      <button type="button" id="cancelButton" className="buttonRR" onClick={() => setShowDialog(false)}>CANCEL</button>
    </div>
  );
}

export default AddReview;
