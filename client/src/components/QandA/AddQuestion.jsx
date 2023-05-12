import React, {useState} from 'react';

const AddQuestion = ({show, setShow, product, addQuestion}) => {
  const [question, setQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  }
  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      body: question,
      name: nickname,
      email: email,
      product_id: product.id
    }
    addQuestion(data);
    setShow(!show);
  }

  if (!show) {
    return null;
  }
  return (
    <div className="modal" onClick={() => setShow(!show)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">Ask Your Question</h4>
          <div className="modal-subtitle">About the {product.name}</div>
        </div>
        <form onSubmit={handleSubmit} className="modal-body">
          <div className="modal-body-title">* Your Question: </div>
          <textarea onChange={handleQuestionChange} placeholder="Why did you like the product or not?" maxlength="1000" className="modal-textArea" required/>
          <div className="modal-body-container">
            <div className="modal-component-title">* What is your nickname:</div>
            <input onChange={handleNicknameChange} type="text" maxlength="60" placeholder="Example: jackson11!" required />
          </div>
          <div className="modal-warning">*For privacy reasons, do not use your full name or email address </div>
          <div className="modal-body-container">
            <div className="modal-component-title">* Your Email:</div>
            <input onChange={handleEmailChange} id="email" type="email" maxlength="60" placeholder="Example: jack@email.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required></input>
          </div>
          <div className="modal-warning">*For authentication reasons, you will not be emailed </div>
          <div className="modal-footer">
            <button onClick={() => setShow(!show)} className="button">Close</button>
            <button className="button" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddQuestion;