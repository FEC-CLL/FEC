/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// This child component will contain a single product card
import React from 'react';

// TODO: have a set dimension size for each card
// TODO: import image from API request

function Card({
  name, category, price, tempImg,
}) {
  const handleCardClick = (event) => {
    event.preventDefault();
    alert('New product chosen');
    // TODO: This will change the current chosen product
  };

  const handleCompareClick = (event) => {
    event.stopPropagation();
    alert('Comparing current product with chosen product');
    // TODO: when a user clicks on the star, a modal table should pop up
    // comparing current product to selected product
  };

  // TODO: replace button with star icon
  return (
    <div className="productCard" onClick={handleCardClick}>
      <button className="compareButton" type="submit" onClick={handleCompareClick}>Star</button>
      <img className="cardImg" src={tempImg} alt="product" />

      {category}
      <h3 className="prodName">{name}</h3>
      <p className="price">{price}</p>
      <p className="rating">Rating</p>
    </div>
  );
}
export default Card;
