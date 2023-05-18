import React, { useState } from 'react';

function AddReviewPhoto() {
  const [photos, setPhotos] = useState([]);

  const fileChangedHandler = (event) => {
    const file = event.target.files[0];
    setPhotos(...photos, file);
  };

  const uploadHandler = () => {

  };

  return (
    <div>
      {
      photos.length < 5
        ? (
          <div>
            <input type="file" onChange={fileChangedHandler} />
            <button type="button" onClick={uploadHandler}>Upload Photo</button>
          </div>
        )
        : ''
      }

    </div>
  );
}

export default AddReviewPhoto;
