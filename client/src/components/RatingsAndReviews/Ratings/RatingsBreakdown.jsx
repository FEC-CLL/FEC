/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

import React from 'react';

function RatingsBreakdown({
  metaData, votesNum, starsFilter, setStarsFilter,
}) {
  const metaRatings = metaData.ratings;
  if (metaRatings) {
    const starsCount = Object.keys(metaRatings);
    const starsRating = Object.values(metaRatings);

    return (
      <div className="RatingsBreakdown">
        {
          starsCount.map((stars, i) => (
            <RatingBreakdown
              stars={stars}
              size={`${(starsRating[i] * 100) / votesNum}%`}
              starsFilter={starsFilter}
              setStarsFilter={setStarsFilter}
            />
          ))
        }
      </div>
    );
  }
}

function RatingBreakdown({
  stars, size, starsFilter, setStarsFilter,
}) {
  const onStarClick = () => {
    const output = {};
    for (const prop in starsFilter) {
      output[prop] = starsFilter[prop];
    }
    output[stars] = !output[stars];
    setStarsFilter(output);
  };

  return (
    <div className="RatingsRow">
      <div className="RatingsSide">
        <div className="starsName" onClick={onStarClick} style={{ color: starsFilter[stars] ? '#000000' : '#A0A0A0' }}>
          {stars}
          {' stars'}
        </div>
      </div>
      <div className="RatingsMiddle">
        <div className="bar-container">
          <div className="bar" style={{ width: size }} />
        </div>
      </div>
    </div>
  );
}

export default RatingsBreakdown;
