/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';

function OverallRating({ overallRating, setOverallRating }) {
  const onOptionChange = (e) => {
    setOverallRating(e.target.value);
  };

  return (
    <div>
      <div className="addReviewHeader modal-component-title">*Overall Rating</div>
      <div className="rating">
        {
          ['1', '2', '3', '4', '5'].map((n) => (
            <OverallRatingRadioButton
              n={n}
              onChange={onOptionChange}
              rating={overallRating}
              key={n}
            />
          ))
        }
      </div>
    </div>
  );
}

function OverallRatingRadioButton({ n, onChange, rating }) {
  return (
    <>
      <input
        type="radio"
        name="overallRating"
        value={n}
        id={n}
        checked={rating === n}
        onChange={onChange}
        required
      />
      <label htmlFor={n} className="star" aria-hidden="true">{n}</label>
    </>
  );
}

export default OverallRating;
