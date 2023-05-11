/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

function AddQuestion({
  show, setShow, product, addQuestion,
}) {
  const [question, setQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };
  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      body: question,
      name: nickname,
      email,
      product_id: product.id,
    };
    addQuestion(data);
    setShow(!show);
  };

  if (!show) {
    return null;
  }
  return (
    <div className="modal" onClick={() => setShow(!show)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">Ask Your Question</h4>
          <h5 className="modal-subtitle">
            About the
            {product.name}
          </h5>
        </div>
        <form onSubmit={handleSubmit} className="modal-body">
          <div className="modalBodyTitle">* Your Question: </div>
          <textarea onChange={handleQuestionChange} placeholder="Why did you like the product or not?" maxLength="1000" className="addAnswerInput" required />
          <div className="modal-body-container">
            <div className="modalTitle">* What is your nickname:</div>
            <input onChange={handleNicknameChange} type="text" maxLength="60" placeholder="Example: jackson11!" required />
          </div>
          <div className="nicknameText">*For privacy reasons, do not use your full name or email address </div>
          <div className="modal-body-container">
            <div className="modalTitle">* Your Email:</div>
            <input onChange={handleEmailChange} id="email" type="email" maxLength="60" placeholder="Example: jack@email.com" required />
          </div>
          <div className="nicknameText">*For authentication reasons, you will not be emailed </div>
          <div className="modal-footer">
            <button type="button" onClick={() => setShow(!show)} className="button">Close</button>
            <button className="button" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddQuestion;
