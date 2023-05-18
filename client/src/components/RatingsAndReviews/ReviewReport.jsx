/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import axios from 'axios';

function ReviewReport({ review, reported, setReported }) {
  function onReportClick() {
    axios.put(`/reviews/${review.review_id}/report`)
      .then((result) => {
        if (result.status === 204) {
          console.log('reported');
          setReported(reported + 1);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="reviewReport">
      <div className="reportText" onClick={onReportClick}>Report</div>
    </div>
  );
}

export default ReviewReport;
