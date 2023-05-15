/* eslint-disable no-restricted-syntax */
import React from 'react';
import ProductStar from '../../Overview/ProductStar';

function round(value, precision) {
  const multiplier = 10 ** (precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

function RatingOverall({ metaData }) {
  const metaRatings = metaData.ratings;
  let total = 0;
  let votesNum = 0;

  // eslint-disable-next-line guard-for-in
  for (const prop in metaRatings) {
    const votesN = metaRatings[prop] * 1;
    total += prop * 1 * votesN;
    votesNum += votesN;
  }

  const average = total / votesNum;
  const averageNum = round(average, 1);

  console.log('PStar:', ProductStar);

  return (
    <div className="ratingOverall">
      <div className="ratingOverallNum">
        {!Number.isNaN(averageNum) ? averageNum : ''}
      </div>
      <div className="ratingsOverallStars">
        <ProductStar averageReview={averageNum} />
      </div>
    </div>
  );
}

export default RatingOverall;
