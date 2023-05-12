import React from 'react';
import Question from './Question';

function QuestionList({
  product, questions, questionHandler,
}) {
  console.log(questions);
  return (
    <div className="questions-list">
      {questions.map((question) => (
        <Question
          product={product}
          questionHandler={questionHandler}
          question={question}
        />
      ))}
    </div>
  );
}

export default QuestionList;
