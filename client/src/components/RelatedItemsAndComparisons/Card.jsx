/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ComparisonModal from './ComparisonModal';
import ProductStar from '../Overview/ProductStar';

// TODO: have a set dimension size for each card
// TODO: import image from API request

function Card({
  initProd, setInitProd, product, name, category, price,
}) {
  // eslint-disable-next-line no-unused-vars
  const [productStyles, setProductStyles] = useState({});
  const [salePrice, setSalePrice] = useState(null);
  const [defaultImages, setDefaultImages] = useState([]);
  const [modalView, setModalView] = useState(false);

  const defaultImgURL = 'https://www.freeiconspng.com/uploads/no-image-icon-15.png';

  // ===============HELPER FUNCTIONS====================
  // const handleCardClick = () => {
  //   // event.stopPropagation();
  //   alert('New product chosen');
  //   // TODO: This will change the current chosen product
  //   // setInitProd(product);
  // };

  const handleCompareClick = () => {
    // event.stopPropagation();
    setModalView(!modalView);
  };

  const findDefault = (prodStyles) => {
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
        console.log('prod styles: ', style.data);
        findDefault(style.data);
        setProductStyles(style.data);
      }))
      .catch((err) => {
        console.error('Couldnt get styles...', err);
      });
  }, []);

  return (
    <div>
      {modalView && (
        <ComparisonModal
          handleCompareClick={handleCompareClick}
          initProd={initProd}
          product={product}
        />
      )}
      <div className="productCard">
        <button className="compareButton" type="button" onClick={handleCompareClick}>
          ⭐
        </button>
        <img className="cardImg" src={defaultImages[0] || defaultImgURL} alt="product" />

        <p className="category">{category}</p>
        <h3 className="prodName">{name}</h3>
        <div className="price">
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
                {price}
              </p>
            )}
        </div>
        <p className="rating">
          Rating:
          {' '}
          <ProductStar averageReview={product.averageReview} />
        </p>
      </div>
    </div>
  );
}
export default Card;
