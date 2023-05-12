import React, {useState} from 'react';
import Question from './Question.jsx';

const QuestionList = ({product, questions, count, questionHandler}) => {
  console.log(questions);
  return (
    <div className="questions-list">
        {questions.map((question) => {
          return <Question product={product} questionHandler={questionHandler} question={question} />
        })}
    </div>
  );
}

export default QuestionList;