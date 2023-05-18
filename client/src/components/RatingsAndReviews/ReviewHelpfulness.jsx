/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import axios from 'axios';

function ReviewHelpfulness({ review }) {
  const [helpYes, setHelpYes] = useState(review.helpfulness);

  function onHelpYesClick() {
    axios.put(`/reviews/${review.review_id}/helpful`)
      .then((result) => {
        if (result.status === 204) {
          setHelpYes(helpYes + 1);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="reviewHelpfulness">
      <div className="reviewHelpfulness1">Helpful?</div>
      <div className="yes" onClick={onHelpYesClick}>Yes</div>
      <div className="reviewHelpfulness2">
        (
        {helpYes}
        )
      </div>
    </div>
  );
}

export default ReviewHelpfulness;
