/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';

function ProductRecommendation({ recommend, setRecommend }) {
  const onOptionChange = (e) => {
    setRecommend(e.target.value === 'Yes');
  };

  return (
    <div>
      <div className="modal-component-title">*Do you recommend this product?</div>
      <input
        type="radio"
        name="recommend"
        value="Yes"
        id="yes"
        checked={recommend === true}
        onChange={onOptionChange}
      />
      <label htmlFor="yes">Yes</label>

      <input
        type="radio"
        name="recommend"
        value="No"
        id="no"
        checked={recommend === false}
        onChange={onOptionChange}
      />
      <label htmlFor="no">No</label>
    </div>
  );
}

export default ProductRecommendation;
