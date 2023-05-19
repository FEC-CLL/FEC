import React, { useState } from 'react';

function Answer({ answer, helpfulHandler, reportHandler }) {
  const [helpClicked, setHelpClicked] = useState(false);
  const [reportClicked, setReportClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (photo) => {
    setSelectedImage(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage('');
    setIsModalOpen(false);
  };

  const helpHandler = () => {
    helpfulHandler(answer.answer_id);
    setHelpClicked(true);
  };
  const reportingHandler = () => {
    reportHandler(answer.answer_id);
    setReportClicked(true);
  };
  const date = new Date(answer.date.slice(0, 10)).toLocaleString('en-us', { month: 'long', day: 'numeric', year: 'numeric' });
  return (
    <div className="answerContainer">
      <div className="answerBody">
        {answer.body}
        {answer.photos.length
          ? (
            <div className="photos">
              {answer.photos.map((photo) => (
                // eslint-disable-next-line
                <img onClick={() => openModal(photo.url)} className="answer-photo" src={photo.url} alt="" />
              ))}
              {isModalOpen && (
                <div className="modal">
                  <div className="photo-modal-content">
                    <img className="modal-image" src={selectedImage} alt="full resolution" />
                    <button className="close-button" type="button" onClick={closeModal}>X</button>
                  </div>
                </div>
              ) }
            </div>
          )
          : null}
      </div>
      <div className="answer-info">
        <div className="by">
          by
        </div>
        {answer.answerer_name.toLowerCase() === 'seller' ? <div className="seller">{answer.answerer_name}</div> : <div>{answer.answerer_name}</div>}
        <div>
          ,
          {' '}
          {date}
        </div>
        <div className="pole"> | </div>
        <div>Helpful?</div>
        {helpClicked ? <div className="regular">Yes</div> : <button type="button" onClick={helpHandler} className="astext">Yes</button>}
        (
        {answer.helpfulness}
        )
        <div className="pole"> | </div>
        {reportClicked ? <div>Reported</div> : <button type="button" onClick={reportingHandler} className="astext">Report</button>}
      </div>
    </div>
  );
}

export default Answer;
