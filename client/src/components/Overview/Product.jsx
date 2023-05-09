import React from 'react';
import './styles.css';

export default function Product() {
  return (
    <div className="container">
      <div className="image-gallery">
        <div className="image-gallery__thumbnail-nav">
          <button className="image-gallery__thumbnail-nav__up"></button>
          <ul>
            <li><img className="image-gallery__thumbnail-nav__image" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="Thumbnail 1" /></li>
            <li><img className="image-gallery__thumbnail-nav__image" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="Thumbnail 1" /></li>
            <li><img className="image-gallery__thumbnail-nav__image" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="Thumbnail 1" /></li>
            <li><img className="image-gallery__thumbnail-nav__image" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="Thumbnail 1" /></li>
            <li><img className="image-gallery__thumbnail-nav__image" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="Thumbnail 1" /></li>
            <li><img className="image-gallery__thumbnail-nav__image" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="Thumbnail 1" /></li>
            <li><img className="image-gallery__thumbnail-nav__image" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="Thumbnail 1" /></li>
          </ul>
          <button className="image-gallery__thumbnail-nav__down"></button>
        </div>
        <div className="image-gallery__image">
          <button className="image-gallery__image-left"></button>
          <img className="image-gallery__image__main" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="Main Product" />
          <button className="image-gallery__image-right"></button>
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
        <p className="product-information__category">Category</p>
        <h2 className="product-information__product-title">Product Title</h2>
        <p className="product-information__price">
          <span className="product-information__price--strike">$140</span>
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
        <button className="product-information__add-to-cart">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
