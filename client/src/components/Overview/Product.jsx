import React, { useState } from 'react';
import './styles.css';

export default function Product({ product = {} }) {
  const {
    name, category, results,
  } = product;

  const [styleIndex, setStyleIndex] = useState(0);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [skuId, setSkuId] = useState(null);

  if (!results?.length) {
    return null;
  }

  const styleSkus = Object.keys(results[styleIndex].skus);

  return (
    <div className="container">
      <div className="image-gallery">
        <div className="image-gallery__thumbnail-nav">
          <button type="button" className="image-gallery__thumbnail-nav__up" aria-label="Up" />
          <ul className="image-gallery__thumbnail-nav__list">
            {results[styleIndex].photos?.map((photo, index) => <li><button onClick={() => setMainImageIndex(index)} onKeyPress={() => setMainImageIndex(index)} type="button" key={photo.thumbnail_url}><img className="image-gallery__thumbnail-nav__image" src={photo.thumbnail_url} alt="Thumbnail 1" /></button></li>)}
          </ul>
          <button type="button" className="image-gallery__thumbnail-nav__down" aria-label="Down" />
        </div>
        <div className="image-gallery__image">
          <button type="button" className="image-gallery__image-left" aria-label="Left" onClick={() => setMainImageIndex(Math.max(0, mainImageIndex - 1))} />
          <img className="image-gallery__image__main" src={results[styleIndex].photos[mainImageIndex].url} alt="Main Product" />
          <button type="button" className="image-gallery__image-right" aria-label="Right" onClick={() => setMainImageIndex(Math.min(mainImageIndex + 1, results[styleIndex].photos.length - 1))} />
        </div>
      </div>
      <div className="product-information">
        <div className="product-information__reviews">
          <span>
            <span className="product-information__reviews--0" />
            <span className="product-information__reviews--1" />
            <span className="product-information__reviews--2" />
            <span className="product-information__reviews--3" />
            <span className="product-information__reviews--4" />
          </span>
          {' '}
          <a href="#reviews" className="product-information__reviews__link">Read all reviews</a>
        </div>
        <p className="product-information__category">{category}</p>
        <h2 className="product-information__product-title">{name}</h2>
        <p className="product-information__price">
          {results[styleIndex].sale_price ? (
            <span>
              <span className="product-information__price--strike">{results[styleIndex].original_price}</span>

              <span className="product-information__price--sale">{results[styleIndex].sale_price}</span>
            </span>
          )
            : results[styleIndex].original_price}
        </p>

        <div className="product-information__style-selector">
          <p>
            <span className="product-information__style-selector--bold">STYLE &gt; </span>
            {results[styleIndex].name}
          </p>
          <ul>
            {results.map((result, index) => (
              <li>
                <button type="button" onClick={() => setStyleIndex(index)} key={result.photos[0].thumbnail_url}>
                  <span className="product-information__style-selector--selected" />
                  <img className="product-information__style-selector__thumbnail" src={result.photos[0].thumbnail_url} alt="Add to Cart Icon" />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="product-information__options">
          <select className="product-information__select product-information__select--size" name="size" id="size" onChange={(e) => setSkuId(e.target.value)}>
            <option value="">Select size</option>
            {styleSkus.map((sku) => (
              <option value={sku} key={sku}>{results[styleIndex].skus[sku].size}</option>
            ))}
          </select>
          <select className="product-information__select product-information__select--quantity" name="quantity" id="quantity">
            <option value="">Select quantity</option>
            {[...Array(results[styleIndex].skus[skuId]?.quantity || 1).keys()].map((number) => (
              <option value={number + 1}>{number + 1}</option>
            ))}
          </select>
        </div>
        <button type="button" className="product-information__add-to-cart">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
