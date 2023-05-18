import React, { useState } from 'react';

function Answer({ answer, helpfulHandler, reportHandler }) {
  const [helpClicked, setHelpClicked] = useState(false);
  const [reportClicked, setReportClicked] = useState(false);
  const helpHandler = () => {
    helpfulHandler(answer.answer_id);
    setHelpClicked(true);
  };
  const reportingHandler = () => {
    reportHandler(answer.answer_id);
    setReportClicked(true);
  };
  const date = new Date(answer.date.slice(0, 10)).toLocaleString('en-us', { month: 'long', day: 'numeric', year: 'numeric' });
  return (
    <div className="answerContainer">
      <div className="answerBody">
        {answer.body}
        {answer.photos.length
          ? (
            <div className="photos">
              {answer.photos.map((photo) => (
                <img className="answer-photo" src={photo.url} alt="" />
              ))}
            </div>
          )
          : null}
      </div>
      <div className="answer-info">
        <div className="by">
          by
        </div>
        {answer.answerer_name.toLowerCase() === 'seller' ? <div className="seller">{answer.answerer_name}</div> : <div>{answer.answerer_name}</div>}
        <div>
          ,
          {' '}
          {date}
        </div>
        <div className="pole"> | </div>
        <div>Helpful?</div>
        {helpClicked ? <div className="regular">Yes</div> : <button type="button" onClick={helpHandler} className="astext">Yes</button>}
        (
        {answer.helpfulness}
        )
        <div className="pole"> | </div>
        {reportClicked ? <div>Reported</div> : <button type="button" onClick={reportingHandler} className="astext">Report</button>}
      </div>
    </div>
  );
}

export default Answer;
