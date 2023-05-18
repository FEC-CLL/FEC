/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// TODO: have a set dimension size for each card
// TODO: import image from API request

function Card({ product }) {
  // eslint-disable-next-line no-unused-vars
  const [productStyles, setProductStyles] = useState({});
  const [salePrice, setSalePrice] = useState(null);
  const [defaultImages, setDefaultImages] = useState([]);

  const imgUnavailableURL = 'https://www.freeiconspng.com/uploads/no-image-icon-15.png';

  // ===============HELPER FUNCTIONS====================
  const handleCardClick = () => {
    // event.preventDefault();
    alert('New product chosen');
    // TODO: This will change the current chosen product
  };

  const handleCompareClick = (event) => {
    event.stopPropagation();
    alert('Comparing current product with chosen product');
    // TODO: when a user clicks on the star, a modal table should pop up
    // comparing current product to selected product
  };

  const findDefaultImages = (prodStyles) => {
    const defaultImgs = [];
    for (let i = 0; i < prodStyles.length; i += 1) {
      if (prodStyles[i]['default?']) {
        setSalePrice(prodStyles[i].sale_price);
        prodStyles[i].photos.forEach((img) => {
          defaultImgs.push(img.thumbnail_url);
        });
      }
    }
    setDefaultImages(defaultImgs);
  };

  // =============GET REQUEST FOR STYLES================
  const styles = axios.get(`/products/${product.id}/styles`);

  // TODO: send another request to get product ratings
  useEffect(() => {
    axios.all([styles])
      .then(axios.spread((style) => {
        findDefaultImages(style.data);
        setProductStyles(style.data);
      }))
      .catch((err) => {
        console.error('Couldnt get styles...', err);
      });
  }, []);

  // TODO: replace button with star icon
  return (
    <div className="productCard" data-testid="rp-card" onClick={handleCardClick}>
      <button className="compareButton" data-testid="rp-comparebtn" type="button" onClick={handleCompareClick}>Star</button>
      <img className="cardImg" data-testid="rp-cimage" src={defaultImages[0] || imgUnavailableURL} alt="product" />

      <p className="category" data-testid="rp-category">{product.category}</p>
      <h3 className="prodName" data-testid="rp-name">{product.name}</h3>
      <div className="price" data-testid="rp-price">
        {salePrice
          ? (
            <div className="sale">
              <p className="oldPrice">
                Price:
                {product.default_price}
              </p>
              <p className="salePrice">
                Sale:
                {salePrice}
              </p>
            </div>
          )
          : (
            <p className="noSalePrice">
              Price:
              {product.default_price}
            </p>
          )}
      </div>
      <p className="rating" data-testid="rp-rating">Rating</p>
    </div>
  );
}
export default Card;
