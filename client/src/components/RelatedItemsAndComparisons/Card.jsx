// This child component will contain a single product card
import React from 'react';

const Card = ({name}) => {
  return (
    <div className="productCard">
      {name}
    </div>
  );
};
export default Card;
