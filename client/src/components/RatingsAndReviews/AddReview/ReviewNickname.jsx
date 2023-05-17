/* eslint-disable react/prop-types */
import React from 'react';

function ReviewNickname({ setReviewNickname }) {
  function onInputChange(e) {
    setReviewNickname(e.target.value);
  }

  return (
    <div className="addReviewNickname">
      <div className="addReviewHeader modal-component-title">*What is your nickname</div>
      <input className="addReviewNicknameInput" maxLength="60" placeholder="Example: jackson11!" onChange={onInputChange} />
      <div className="addReviewFooter modal-warning">*For privacy reasons, do not use your full name or email address</div>
    </div>
  );
}

export default ReviewNickname;
