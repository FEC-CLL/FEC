/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';

function ReviewReport({ review }) {
  function onReportClick() {
    axios.put(`/reviews/${review.review_id}/report`)
      .then((result) => {
        if (result.status === 204) {
          console.log('reported');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="reviewReport">
      <p className="reportText" onClick={onReportClick}>Report</p>
    </div>
  );
}

export default ReviewReport;
