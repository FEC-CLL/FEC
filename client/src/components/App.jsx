
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
    initialRender()
  }, []);

  const initialRender = () => {
    Promise.all([axios.get('/products/40344'), axios.get('/products/40344/styles')])
    .then((responses) => {
      // Set product data to state
      const [productResponse, stylesResponse] = responses
      console.log('responses:', responses);
      console.log('product response:', productResponse.data);
      console.log('styles response:', stylesResponse.data);
      const joinedResponse = {...productResponse.data, ...stylesResponse.data}
      console.log('joined response:', joinedResponse)
      setInitProd(joinedResponse);
    })
    .catch((err) => {
      console.error(err);
    });
  }

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
      <Product initProd={initProd}/>
      <RelatedItems />
      <QandA />
      <Ratings initProd={initProd} />
    </div>
  );
}
