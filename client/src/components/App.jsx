
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import data from '/sampleData/products.json';
import Product from './Overview/Product';
import QandA from './QandA/QandAContainer';
import Ratings from './RatingsAndReviews/RatingsAndReviewsContainer';
import RelatedItems from './RelatedItemsAndComparisons/RelatedItemsAndComContainer';

export default function App() {
  const [allProducts, setAllProducts] = useState();
  const [currentProduct, setCurrentProduct] = useState();
  const [initProd, setInitProd] = useState({});

  useEffect(() => {
    // Initial request for one product
    axios.get('/products/40344')
      .then((response) => {
        // Set product data to state
        console.log('response:', response);
        setInitProd(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div id="App">
      <nav className="navBar">
        FEC Project
        <img src="" />
        <form>
          <input type="text" placeholder="Search here..." />

          <button type="submit">
            <img src="/assets/icons/search.png" />
          </button>

        </form>
      </nav>
      <Product />
      <RelatedItems />
      <QandA />
      <Ratings initProd={initProd} />
    </div>
  );
}
