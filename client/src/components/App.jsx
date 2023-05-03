import React, { useState } from 'react';
import data from '/sampleData/products.json';
import Product from './Overview/Product.jsx';
import QandA from './QandA/QandAContainer.jsx';
import Ratings from './RatingsAndReviews/RatingsAndReviewsContainer.jsx';
import RelatedItems from './RelatedItemsAndComparisons/RelatedItemsAndComContainer.jsx';

export default function App() {
  const [allProducts, setAllProducts] = useState(data);
  const [currentProduct, setCurrentProduct] = useState(data[0]);

  return (
    <div id="App">
      <Product></Product>
      <RelatedItems></RelatedItems>
      <QandA></QandA>
      <Ratings></Ratings>
    </div>
  );
}