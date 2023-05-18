/* eslint-disable react/prop-types */
import React from 'react';

function ReviewEmail({ setReviewEmail }) {
  function onInputChange(e) {
    setReviewEmail(e.target.value);
  }

  return (
    <div className="addReviewEmail">
      <div className="addReviewHeader modal-component-title">*Your Email</div>
      <input className="addReviewEmailInput" type="email" maxLength="60" placeholder="Example: jackson11@email.com" onChange={onInputChange} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
      <div className="addReviewFooter modal-warning">*For privacy reasons, do not use your full name or email address</div>
    </div>
  );
}

export default ReviewEmail;
