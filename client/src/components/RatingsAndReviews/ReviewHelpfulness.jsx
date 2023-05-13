/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
      <p>Helpful?</p>
      <p className="yes" onClick={onHelpYesClick}>Yes</p>
      <p>
        (
        {helpYes}
        )
      </p>
    </div>
  );
}

export default ReviewHelpfulness;
