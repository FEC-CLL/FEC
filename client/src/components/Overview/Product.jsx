import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';
import ProductStar from './ProductStar';

export default function Product({ product = {} }) {
  const {
    name, category, styles, reviewCount, averageReview, description,
  } = product;

  const [styleIndex, setStyleIndex] = useState(0);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [skuId, setSkuId] = useState(null);
  const [thumbnailIndex, setThumbnailIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  if (!styles?.length) {
    return null;
  }

  const styleSkus = Object.keys(styles[styleIndex].skus);
  const currentSku = styles[styleIndex].skus[skuId];
  const filteredSkuQuantities = styleSkus.filter(
    (sku) => styles[styleIndex].skus[sku].quantity !== 0,
  );
  const isOutOfStock = filteredSkuQuantities.length === 0;

  const styleHandler = (i) => {
    setSkuId(null);
    setStyleIndex(i);
    setMainImageIndex(0);
    setThumbnailIndex(0);
  };

  const mainImgZoomHandler = (e) => {
    const { target: { offsetLeft, offsetTop }, clientX, clientY } = e;
    setMousePosition({ x: clientX - offsetLeft, y: clientY - offsetTop });
  };
  const submitCart = () => {
    axios.post('/cart', { sku_id: skuId });
  };

  return (
    <div className="container m-container">
      <div className={isExpanded ? 'image-gallery--expanded image-gallery' : 'image-gallery--collapsed image-gallery'}>
        <div className="image-gallery__thumbnail-nav">
          <button type="button" className={thumbnailIndex !== 0 ? 'image-gallery__thumbnail-nav__button image-gallery__thumbnail-nav__button--up' : 'image-gallery__thumbnail-nav__button image-gallery__thumbnail-nav__button--hidden'} aria-label="Up" onClick={() => setThumbnailIndex(Math.max(0, thumbnailIndex - 1))} />
          <div className="image-gallery__thumbnail-nav__list-wrapper">
            <ul className="image-gallery__thumbnail-nav__list" style={{ transform: `translateY(${thumbnailIndex * -70}px)` }}>
              {styles[styleIndex].photos?.map((photo, index) => <li key={photo.thumbnail_url}><button onClick={() => setMainImageIndex(index)} onKeyPress={() => setMainImageIndex(index)} type="button"><img className={index === mainImageIndex ? 'image-gallery__thumbnail-nav__image image-gallery__thumbnail-nav__image--selected' : 'image-gallery__thumbnail-nav__image'} src={photo.thumbnail_url} alt="Thumbnail" /></button></li>)}
            </ul>
          </div>
          {thumbnailIndex !== styles[styleIndex].photos.length - 6 && styles[styleIndex].photos.length > 7 && <button type="button" className="image-gallery__thumbnail-nav__down" aria-label="Down" onClick={() => setThumbnailIndex(Math.min(thumbnailIndex + 1, styles[styleIndex].photos.length - 6))} />}
        </div>
        <div className="image-gallery__image">
          <button type="button" className={mainImageIndex !== 0 ? 'image-gallery__image-left' : 'image-gallery__thumbnail-nav__button--hidden'} aria-label="Left" onClick={() => setMainImageIndex(Math.max(0, mainImageIndex - 1))} />
          <div className="image-gallery__image__main-wrapper" onClick={() => setIsExpanded(!isExpanded)} onKeyPress={() => setIsExpanded(!isExpanded)} role="button" tabIndex={0}>
            <img className={isExpanded ? 'image-gallery__image__main image-gallery__image__main--zoom' : 'image-gallery__image__main'} style={{ transformOrigin: `${mousePosition.x}px ${mousePosition.y}px` }} onMouseMove={mainImgZoomHandler} src={styles[styleIndex].photos[mainImageIndex].url} alt={styles[styleIndex].name} />
          </div>
          <button type="button" className={mainImageIndex !== styles[styleIndex].photos.length - 1 ? 'image-gallery__image-right' : 'image-gallery__thumbnail-nav__button--hidden'} aria-label="Right" onClick={() => setMainImageIndex(Math.min(mainImageIndex + 1, styles[styleIndex].photos.length - 1))} />
        </div>
      </div>
      <div className={isExpanded ? 'product-information--collapsed' : 'product-information--expanded'}>
        <div className="product-information__reviews">
          <ProductStar averageReview={averageReview} />
          {' '}
          {reviewCount && <a href="#reviews" className="product-information__reviews__link">{`Read all ${reviewCount} reviews`}</a>}
        </div>
        <p className="product-information__category">{category}</p>
        <h2 className="product-information__product-title">{name}</h2>
        <p className="product-information__price">
          {styles[styleIndex].sale_price ? (
            <span>
              <span className="product-information__price--sale">
                $
                {styles[styleIndex].sale_price}
                {' '}
              </span>
              <span className="product-information__price--strike">
                $
                {styles[styleIndex].original_price}
              </span>
            </span>
          )
            : styles[styleIndex].original_price}
        </p>
        <p>{description}</p>
        <div className="product-information__style-selector">
          <p>
            <span className="product-information__style-selector--bold">STYLE &gt; </span>
            {styles[styleIndex].name}
          </p>
          <ul>
            {styles.map((result, index) => (
              <li key={result.photos[0].thumbnail_url}>
                <button type="button" title={result.name} onClick={() => styleHandler(index)}>
                  {styleIndex === index && <span className="product-information__style-selector--selected" />}
                  <img className="product-information__style-selector__thumbnail" src={result.photos[0].thumbnail_url} alt="Add to Cart Icon" />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="product-information__options">
          <select className="product-information__select" name="size" id="size" onChange={(e) => setSkuId(e.target.value)} disabled={isOutOfStock}>
            <option value="">{isOutOfStock ? 'OUT OF STOCK' : 'Select size'}</option>
            {filteredSkuQuantities.map((sku) => (
              <option value={sku} key={sku}>{styles[styleIndex].skus[sku].size}</option>
            ))}
          </select>
          <select className="product-information__select" name="quantity" id="quantity" disabled={!skuId}>
            {skuId ? [...Array(Math.min(currentSku?.quantity, 15) || 1).keys()].map((number) => (
              <option value={number + 1} key={number}>{number + 1}</option>
            )) : <option value="">--</option>}
          </select>
        </div>
        <button type="button" disabled={!skuId} className="product-information__add-to-cart" onClick={submitCart}>
          Add to Cart
        </button>
        <div className="share-links-wrapper">
          <a href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=`} target="_blank" rel="noreferrer">
            <img className="share-links__icon" src="/assets/icons/twitter.png" alt="twitter" />
          </a>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} target="_blank" rel="noreferrer">
            <img className="share-links__icon" src="/assets/icons/facebook.png" alt="facebook" />
          </a>
          <a href={`https://pinterest.com/pin/create/button/?url=${window.location.href}&media=&description=`} target="_blank" rel="noreferrer">
            <img className="share-links__icon" src="/assets/icons/pinterest.png" alt="pinterest" />
          </a>
        </div>
      </div>
    </div>
  );
}
