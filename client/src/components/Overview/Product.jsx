import React, {useState} from 'react';
import './styles.css';

export default function Product({initProd = {}}) {
  const {id, name, slogan, description, category, results, features} = initProd

  const [styleIndex, setStyleIndex] = useState(0)
  const [mainImageIndex, setMainImageIndex] = useState(0)

  if(!results?.length) {
    return null
  }

  const styleSkus = Object.keys(results[styleIndex].skus)
  // console.log('obj', results[styleIndex].skus)
  console.log('styleskus', styleSkus)
  // console.log('styleskus 0 quantity', styleSkus[0].quantity)
  //const quantityArray = [...Array(results[styleIndex].skus[0]).keys()]
  // const quantityArray = [...Array(8).keys()]
  const quantityArray = results[styleIndex].styleSkus
  console.log('quantity array', quantityArray)

  return (
    <div className="container">
      <div className="image-gallery">
        <div className="image-gallery__thumbnail-nav">
          <button type="button" className="image-gallery__thumbnail-nav__up" aria-label="Up" />
          <ul>
            {results[styleIndex].photos?.map((photo, index) => <li onClick={() => setMainImageIndex(index)}><img className="image-gallery__thumbnail-nav__image" src={photo.thumbnail_url} alt="Thumbnail 1" /></li>)}
          </ul>
          <button type="button" className="image-gallery__thumbnail-nav__down" aria-label="Down" />
        </div>
        <div className="image-gallery__image">
          <button type="button" className="image-gallery__image-left" aria-label="Left" onClick={() => setMainImageIndex(Math.max(0, mainImageIndex-1))}/>
          <img className="image-gallery__image__main" src={results[styleIndex].photos[mainImageIndex].url} alt="Main Product" />
          <button type="button" className="image-gallery__image-right" aria-label="Right" onClick={() => setMainImageIndex(Math.min(mainImageIndex+1, results[styleIndex].photos.length-1))}/>
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
          <span className="product-information__price--strike">{results[styleIndex].original_price}</span>
          {' '}
          <span className={results[styleIndex].sale_price && "product-information__price--sale"}>{results[styleIndex].sale_price ? results[styleIndex].sale_price : null}</span>
        </p>

        <div className="product-information__style-selector">
          <p>
            <span className="product-information__style-selector--bold">STYLE &gt; </span>
            {results[styleIndex].name}
          </p>
          <ul>
            {results.map((result, index) => <li onClick={() => setStyleIndex(index)}><span className="product-information__style-selector--selected" /><img className="product-information__style-selector__thumbnail" src={result.photos[0].thumbnail_url} alt="Add to Cart Icon" /></li>)}
          </ul>
        </div>
        <div className="product-information__options">
          <select className="product-information__select product-information__select--size" name="size" id="size">
            {styleSkus.map(sku => <option value={results[styleIndex].skus[sku].size}>{results[styleIndex].skus[sku].size}</option>)}
            <option value="">Select size</option>
          </select>
          <select className="product-information__select product-information__select--quantity" name="quantity" id="quantity">
            {styleSkus.map(sku => <option value="1">{results[styleIndex].skus[sku].quantity}</option>)}
            <option value="">Select quantity</option>
          </select>
        </div>
        <button type="button" className="product-information__add-to-cart">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
