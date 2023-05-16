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
          key={question.question_id}
          product={product}
          questionHandler={questionHandler}
          question={question}
        />
      ))}
    </div>
  );
}

export default QuestionList;
