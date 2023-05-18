/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ComparisonModal from './ComparisonModal';
import ProductStar from '../Overview/ProductStar';

function Card({
  initProd, product, removeFromOutfit,
}) {
  // eslint-disable-next-line no-unused-vars
  const [productStyles, setProductStyles] = useState({});
  const [salePrice, setSalePrice] = useState(null);
  const [averageReview, setAverageReview] = useState(null);
  const [defaultImages, setDefaultImages] = useState([]);
  const [modalView, setModalView] = useState(false);
  const navigate = useNavigate();

  // Default image when original image isn't available
  const imgUnavailableURL = 'https://www.freeiconspng.com/uploads/no-image-icon-15.png';

  // Prevents scrolling of web page when modal is visible
  if (modalView) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  // ===============HELPER FUNCTIONS====================
  const handleCardClick = () => {
    // updateProduct(product.id);
    // TODO: import Link and return Link component here
    // with new endpoint containing new product id
    navigate(`/products/${product.id}`);
  };

  const handleCompareClick = () => {
    // event.stopPropagation();
    setModalView(!modalView);
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
  useEffect(() => {
    const styles = axios.get(`/products/${product.id}/styles`);
    const avgRating = axios.get(`/products/${product.id}`);
    axios.all([styles, avgRating])
      .then(axios.spread((style, rating) => {
        // console.log('prod styles: ', style.data);
        setAverageReview(rating.data.averageReview);
        findDefaultImages(style.data);
        setProductStyles(style.data);
      }))
      .catch((err) => {
        console.error('Couldnt get styles...', err);
      });
  }, []);

  // TODO: need to have a conditional render of compare btn or remove from outfit button
  // maybe trying use a state isOutfit? similar to modalView
  return (
    <div>
      {modalView && (
        <ComparisonModal
          handleCompareClick={handleCompareClick}
          initProd={initProd}
          product={product}
        />
      )}
      <div className="productCard" data-testid="rp-card" onClick={handleCardClick}>

        {removeFromOutfit === undefined ? (
          <button
            className="compareButton"
            data-testid="rp-comparebtn"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              handleCompareClick();
            }}
          >
            ⭐
          </button>
        )
          : (
            <button
              className="remove-button"
              data-testid="outfit-remove"
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                removeFromOutfit(product.id);
              }}
            >
              X
            </button>
          )}

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
        <p className="rating" data-testid="rp-rating">
          Rating:
          {' '}
          <ProductStar averageReview={averageReview} />
        </p>
      </div>
    </div>
  );
}
export default Card;
