import React from 'react';
import AddQuestion from './AddQuestion';

function Buttons({
  hasMoreQuestions, handleMoreAnsweredQuestions, setShow, addQuestionHandler, product, show,
}) {
  return (
    <div className="buttonContainer">
      {hasMoreQuestions ? <button type="button" onClick={handleMoreAnsweredQuestions} className="qa-button">MORE ANSWERED QUESTIONS</button>
        : null}
      <button type="button" onClick={() => setShow(true)} className="qa-button imageButton">
        ADD A QUESTION
      </button>
      <AddQuestion
        addQuestion={addQuestionHandler}
        product={product}
        show={show}
        setShow={setShow}
      />
    </div>
  );
}

export default Buttons;
