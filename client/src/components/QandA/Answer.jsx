import React, {useState} from 'react';

const Answer = ({answer, helpfulHandler, reportHandler}) => {
  const [helpClicked, setHelpClicked] = useState(false);
  const helpHandler = () => {
    helpfulHandler(answer.answer_id);
    setHelpClicked(true);
  }
  const reportingHandler = () => {
    reportHandler(answer.answer_id);
  }
  const date = new Date(answer.date.slice(0,10)).toLocaleString('en-us', {month:'long', day: 'numeric', year:'numeric'});
  return (
    <div className="answer">
      <div className="answerBody">
        A: {answer.body}
      </div>
      <div className="answerStats">
        <div>by {answer.answerer_name}, {date}</div>
        <div className="pole"> | </div>
        <div>Helpful?</div>
        {helpClicked ? <div>Yes</div> : <button onClick={helpHandler} className="astext">Yes</button>}
        ({answer.helpfulness})
        <div className="pole"> | </div>
        <button onClick={reportingHandler} className="astext">Report</button>
      </div>

    </div>
  );
}

export default Answer;