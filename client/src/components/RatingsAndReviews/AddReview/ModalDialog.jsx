/* eslint-disable react/prop-types */
import React from 'react';
import AddReview from './AddReview';

function ModalDialog({
  showDialog, setShowDialog, initProd, metaData,
}) {
  if (!showDialog) {
    return null;
  }

  return (
    <div className="modalrr">
      <AddReview initProd={initProd} metaData={metaData} setShowDialog={setShowDialog} />
    </div>
  );
}

export default ModalDialog;
