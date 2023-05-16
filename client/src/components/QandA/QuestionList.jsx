import React from 'react';
import Question from './Question';

function QuestionList({
  isLoaded, questions, product, questionHandler,
}) {
  return (
    <div>
      {isLoaded
        ? (
          <p>Loading...</p>
        )
        : (
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
        )}
    </div>
  );
}

export default QuestionList;
