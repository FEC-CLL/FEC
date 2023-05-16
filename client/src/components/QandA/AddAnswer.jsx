import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddAnswer({
  addAnswer, product, question, show, setShow,
}) {
  const [answer, setAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageURLs = [];
    images.forEach((image) => {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onloadend = function () {
        const base64data = reader.result;
        axios.post('https://api.cloudinary.com/v1_1/daakpfwlp/upload', {
          file: base64data,
          upload_preset: 'RFPFEC',
          cloud_name: 'daakpfwlp',
        })
          .then((res) => {
            console.log(res);
            photos.push(res.data.secure_url); //concat
          })
          .catch((err) => {
            console.log(err);
          });
      };
      newImageURLs.push(URL.createObjectURL(image));
    });
    setImageURLs(newImageURLs);
  }, [images]);

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };
  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onImageChange = (event) => {
    console.log(event.target.files);
    setImages([...event.target.files]);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      body: answer,
      name: nickname,
      email,
      photos,
      question_id: question.question_id,
    };
    addAnswer(data);
    setShow(!show);
  };

  if (!show) {
    return null;
  }
  return (
    <div className="modal" onClick={() => setShow(!show)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">Submit your Answer</h4>
          <div className="modal-subtitle">
            {product.name}
            :
            {' '}
            {question.question_body}
            {' '}
          </div>
        </div>
        <form onSubmit={handleSubmit} className="modal-body">
          <div className="modal-body-title">Your answer: </div>
          <textarea onChange={handleAnswerChange} maxLength="1000" className="modal-textArea" required />
          <div className="modal-body-container">
            <div className="modal-component-title">Nickname:</div>
            <input onChange={handleNicknameChange} type="text" maxLength="60" placeholder="Example: jack543!" required />
          </div>
          <div className="modal-warning">*For privacy reasons, do not use your full name or email address </div>
          <div className="modal-body-container">
            <div className="modal-component-title">Email:</div>
            <input onChange={handleEmailChange} id="email" type="email" maxLength="60" placeholder="Example: jack@email.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
          </div>
          <div className="modal-warning">*For authentication reasons, you will not be emailed </div>
          <div className="photo-container">
            <div className="modal-component-title">Photos:</div>
            {images.length < 5 ? <input type="file" multiple accept="image/*" onChange={onImageChange} /> : null}
            <div className="photos">
              { imageURLs.map((imageSrc) => <img className="photo" alt="this is a ..." src={imageSrc} />)}
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" onClick={() => setShow(!show)} className="modal-button">Close</button>
            <button className="modal-button" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddAnswer;
