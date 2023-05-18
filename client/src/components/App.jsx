import React from 'react';
import {
  useLoaderData,
} from 'react-router-dom';

import axios from 'axios';
import Product from './Overview/Product';
import QandA from './QandA/QandAContainer';
import Ratings from './RatingsAndReviews/RatingsAndReviewsContainer';
import RelatedItems from './RelatedItemsAndComparisons/RelatedItemsAndComContainer';

export async function loader({ params }) {
  const productId = params.id || 40347;
  const { data } = await axios.get(`/products/${productId}`);
  return data;
}
export default function App() {
  const product = useLoaderData();

  return (
    <div id="App">
      <Product product={product} />
      <RelatedItems initProd={product} />
      <QandA product={product} />
      <Ratings initProd={product} />
    </div>
  );
}
