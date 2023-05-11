// This child component will contain a single product card
import React from 'react';

// TODO: have a set dimension size for each card
// TODO: import image from API request
const Card = ({name, category, price, tempImg}) => {

  const handleCardClick = () => {
    alert('New product chosen');
    // TODO: This will change the current chosen product
  }

  return (
    <div className="productCard" onClick={handleCardClick}>
      <button className="compareButton">Star</button>
      <img className="cardImg" src={tempImg}></img>
      {category}
      <h3 className="prodName">{name}</h3>
      <p className="price">{price}</p>
      <p className="rating">Rating</p>
    </div>
  );
};
export default Card;
