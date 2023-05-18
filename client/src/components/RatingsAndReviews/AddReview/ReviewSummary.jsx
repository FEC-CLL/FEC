/* eslint-disable react/prop-types */
import React from 'react';

function ReviewSummary({ setReviewSummary }) {
  function onInputChange(e) {
    setReviewSummary(e.target.value);
  }

  return (
    <div>
      <div className="addReviewHeader modal-component-title">Review Summary</div>
      <input className="addReviewSummaryTextArea" maxLength="60" placeholder="Example: Best purchase ever!" onChange={onInputChange} />
    </div>
  );
}

export default ReviewSummary;
