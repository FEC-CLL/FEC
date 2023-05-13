/* eslint-disable react/prop-types */
import React, { useState } from 'react';


function ProductRecommendation({ recommend, setRecommend }) {

  const onOptionChange = e => {
    setRecommend(e.target.value === 'Yes');
  };

  return (
    <div>
      <div> Do you recommend this product?*</div>
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
