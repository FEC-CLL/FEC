import React, { useState } from 'react';
import Question from './Question.jsx';

function QuestionList({
  product, questions, count, questionHandler,
}) {
  console.log(questions);
  return (
    <div className="questions">
      {questions.map((question) => <Question product={product} questionHandler={questionHandler} question={question} />)}
    </div>
  );
}

export default QuestionList;
