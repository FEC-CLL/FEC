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


  // cloudinary.config({
  //   cloud_name: 'daakpfwlp',
  //   api_key: '655296814393677',
  //   api_secret: 'ZFPKwcMvGtuohx8f0RGnZleQZeo',
  // });



  useEffect(() => {
    if (images.length < 1) return;
    // var fileReader = new FileReader();
    const newImageURLs = [];
    images.forEach((image) => {
      // const pics = new FormData();
      var reader = new FileReader();
      //console.log(URL.createObjectURL(image).slice(5));
      reader.readAsDataURL(image);
      reader.onloadend = function() {
        var base64data=reader.result;
        console.log(base64data);
        axios.post('https://api.cloudinary.com/v1_1/daakpfwlp/upload', {
          file: base64data,
          upload_preset: "RFPFEC",
          cloud_name: "daakpfwlp"
        })
        .then((res) => {
          console.log(res);
          photos.push(res.data.secure_url);
        })
        .catch((err) => {
          console.log(err);
        })

      }
      // pics.append('file', image);
      // pics.append("upload_preset", "RFPFEC");
      // pics.append("cloud_name", "daakpfwlp");
      // const myImage = new CloudinaryImage(URL.createObjectURL(image), {cloudName: 'daakpfwlp'}).resize(fill().width(100).height(150));

      // const cloudinaryResponse = cloudinary.uploader.upload(, {
      //   public_id: image.name,
      //   resource_type: 'image',
      // });
      // console.log(myImage);
      // fileReader.onload = function(event) {
      //   //set state for url
      //   console.log(event.target.result);
      // }
      // fileReader.readAsDataURL(image);
      newImageURLs.push(URL.createObjectURL(image));
      // photos.push(image.name);
    });
    console.log(newImageURLs);
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
