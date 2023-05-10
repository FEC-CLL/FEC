import React from 'react';
import './styles.css';

export default function Product({initProd = {}}) {
  const {id, name, slogan, description, category, default_price, features} = initProd

  return (
    <div className="container">
      <div className="image-gallery">
        <div className="image-gallery__thumbnail-nav">
          <button type="button" className="image-gallery__thumbnail-nav__up" aria-label="Up" />
          <ul>
            <li><img className="image-gallery__thumbnail-nav__image" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="Thumbnail 1" /></li>
            <li><img className="image-gallery__thumbnail-nav__image" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="Thumbnail 1" /></li>
            <li><img className="image-gallery__thumbnail-nav__image" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="Thumbnail 1" /></li>
            <li><img className="image-gallery__thumbnail-nav__image" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="Thumbnail 1" /></li>
            <li><img className="image-gallery__thumbnail-nav__image" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="Thumbnail 1" /></li>
            <li><img className="image-gallery__thumbnail-nav__image" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="Thumbnail 1" /></li>
            <li><img className="image-gallery__thumbnail-nav__image" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="Thumbnail 1" /></li>
          </ul>
          <button type="button" className="image-gallery__thumbnail-nav__down" aria-label="Down" />
        </div>
        <div className="image-gallery__image">
          <button type="button" className="image-gallery__image-left" aria-label="Left" />
          <img className="image-gallery__image__main" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="Main Product" />
          <button type="button" className="image-gallery__image-right" aria-label="Right" />
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
          <span className="product-information__price--strike">{default_price}</span>
          {' '}
          <span className="product-information__price--sale">$100</span>
        </p>

        <div className="product-information__style-selector">
          <p>
            <span className="product-information__style-selector--bold">STYLE &gt; </span>
            Forest Green & Black
          </p>
          <ul>
            <li>
              <span className="product-information__style-selector--selected" />
              <img className="product-information__style-selector__thumbnail" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="Add to Cart Icon" />
            </li>
            <li><img className="product-information__style-selector__thumbnail" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="Add to Cart Icon" /></li>
            <li><img className="product-information__style-selector__thumbnail" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="Add to Cart Icon" /></li>
            <li><img className="product-information__style-selector__thumbnail" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="Add to Cart Icon" /></li>
            <li><img className="product-information__style-selector__thumbnail" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="Add to Cart Icon" /></li>
            <li><img className="product-information__style-selector__thumbnail" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="Add to Cart Icon" /></li>
          </ul>
        </div>
        <div className="product-information__options">
          <select className="product-information__select product-information__select--size" name="size" id="size">
            <option value="">Select size</option>
            <option value="XS">Extra Small</option>
          </select>
          <select className="product-information__select product-information__select--quantity" name="quantity" id="quantity">
            <option value="">Select quantity</option>
            <option value="1">1</option>
          </select>
        </div>
        <button type="button" className="product-information__add-to-cart">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
