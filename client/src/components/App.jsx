import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import data from '/sampleData/products.json';
import Product from './Overview/Product';
import QandA from './QandA/QandAContainer';
import Ratings from './RatingsAndReviews/RatingsAndReviewsContainer';
import RelatedItems from './RelatedItemsAndComparisons/RelatedItemsAndComContainer';

export default function App() {
  const [initProd, setInitProd] = useState({});

  useEffect(() => {
    // Initial request for one product
    axios.get('/products/40347')
      .then((response) => {
        // Set product data to state
        console.log('response:', response);
        setInitProd(response.data);

      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    // Initial request for one product
    fetchProductData();
  }, []);

  return (
    <div id="App">
      <nav className="navBar">
        FEC Project
        <img src="" alt="logo" />
        <form>
          <input type="text" placeholder="Search here..." />

          <button type="submit">
            <img src="/assets/icons/search.png" alt="search icon" />
          </button>

        </form>
      </nav>
      <Product product={initProd} />
      <RelatedItems initProd={initProd}/>
      <QandA product={initProd} />
      <Ratings initProd={initProd} />
    </div>
  );
}
