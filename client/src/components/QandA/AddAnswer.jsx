import React, {useState, useEffect} from 'react';


const AddAnswer = ({addAnswer, product, question, show, setShow}) => {
  const [answer, setAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    // var fileReader = new FileReader();
    const newImageURLs = [];
    images.forEach((image) => {
      // fileReader.onload = function(event) {
      //   //set state for url
      //   console.log(event.target.result);
      // }
      //fileReader.readAsDataURL(image);
      newImageURLs.push(URL.createObjectURL(image));
      photos.push(image.name);
    })
    console.log(newImageURLs);
    setImageURLs(newImageURLs);
  }, [images]);

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  }
  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  const onImageChange = (event) => {
    setImages([...event.target.files]);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      body: answer,
      name: nickname,
      email: email,
      photos: photos,
      question_id: question.question_id
    }
    addAnswer(data);
    setShow(!show);
  }

  if (!show) {
    return null;
  }
  return (
    <div className="modal" onClick={() => setShow(!show)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">Submit your Answer</h4>
          <h5 className="modal-subtitle">{product.name}: {question.question_body} </h5>
        </div>
        <form onSubmit={handleSubmit} className="modal-body">
          <div className="modalBodyTitle">Your answer: </div>
          <textarea onChange={handleAnswerChange} maxlength="1000" className="addAnswerInput" required/>
          <div className="modal-body-container">
            <div className="modalTitle">Nickname:</div>
            <input onChange={handleNicknameChange} type="text" maxlength="60" placeholder="Example: jack543!" required />
          </div>
          <div className="nicknameText">*For privacy reasons, do not use your full name or email address </div>
          <div className="modal-body-container">
            <div className="modalTitle">Email:</div>
            <input onChange={handleEmailChange} id="email" type="email" maxlength="60" placeholder="Example: jack@email.com" required></input>
          </div>
          <div className="nicknameText">*For authentication reasons, you will not be emailed </div>
          <div className="photo-container">
            <div className="modalTitle">Photos:</div>
            {images.length < 5 ? <input type="file" multiple accept="image/*" onChange={onImageChange} /> : null}
            <div className="photos">
              { imageURLs.map(imageSrc => <img className="photo" src={imageSrc} />)}
            </div>
          </div>
          <div className="modal-footer">
            <button onClick={() => setShow(!show)} className="button">Close</button>
            <button className="button" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddAnswer;