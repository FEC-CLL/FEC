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
  const fetchProductData = () => {
    Promise.all([
      axios.get('/products/40347'),
      axios.get('/products/40347/styles'),
    ]) // 40347
      .then(([productResponse, stylesResponse]) => {
        setInitProd({
          ...productResponse.data,
          ...stylesResponse.data,
        });
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
        <img src="" />
        <form>
          <input type="text" placeholder="Search here..." />

          <button type="submit">
            <img src="/assets/icons/search.png" />
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
