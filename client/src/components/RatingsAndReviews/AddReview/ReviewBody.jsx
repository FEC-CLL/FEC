import React, { useState } from 'react';

function ReviewBody({ setReviewBody }) {
  const [charNum, setCharNum] = useState(0);

  function onInputChange(e) {
    setCharNum(50 - e.target.value.length);
    setReviewBody(e.target.value);
  }

  return (
    <div>
      <div className="addReviewBodyText modal-component-title">*Review Body</div>
      <textarea className="addReviewBodyTextArea" maxLength="1000" placeholder="Why did you like the product or not?" onChange={onInputChange} required minLength="50" />
      <div id="reviewBodyCharCount modal-warning">
        {charNum >= 0 ? charNum : 'Minimum reached'}
      </div>
    </div>
  );
}

export default ReviewBody;
