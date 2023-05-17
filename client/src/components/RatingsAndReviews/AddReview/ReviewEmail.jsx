/* eslint-disable react/prop-types */
import React from 'react';

function ReviewEmail({ setReviewEmail }) {
  function onInputChange(e) {
    setReviewEmail(e.target.value);
  }

  return (
    <div className="addReviewEmail">
      <div className="addReviewHeader modal-component-title">*Your Email</div>
      <input className="addReviewEmailInput" maxLength="60" placeholder="Example: jackson11@email.com" onChange={onInputChange} />
      <div className="addReviewFooter modal-warning">*For privacy reasons, do not use your full name or email address</div>
    </div>
  );
}

export default ReviewEmail;
