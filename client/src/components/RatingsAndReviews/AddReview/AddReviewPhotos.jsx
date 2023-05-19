import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddReviewPhoto({
  setPhotos,
}) {
  // const [photos, setPhotos] = useState([]);
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageURLs = [];
    const newPhotos = [];
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
            newPhotos.push(res.data.secure_url);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      newImageURLs.push(URL.createObjectURL(image));
    });
    setImageURLs(newImageURLs);
    setPhotos(newPhotos);
  }, [images]);

  const onImageChange = (event) => {
    console.log(event.target.files);
    setImages([...event.target.files]);
  };

  return (
    <div className="photo-container">
      <div className="modal-component-title">Photos:</div>
      {images.length < 5 ? <input className="file-input" type="file" multiple accept="image/*" onChange={onImageChange} /> : null}
      <div className="photos">
        { imageURLs.map((imageSrc) => <img className="photo" alt="this is a ..." src={imageSrc} />)}
      </div>
    </div>
  );
}

export default AddReviewPhoto;
