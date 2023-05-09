import React from 'react';
import Card from './Card';
import products from '../../../../sampleData/products.json';

// Need to have max number of card rendered between 3-4
// Would I need to send an API request for product styles as well?

const RelatedProducts = () => {
  return (
    <div className="relatedList" style={{ display: 'flex' }}>
      {products.map((product, i) =>
        <Card name={product.name} key={i}/>
      )}
    </div>
  );
};

export default RelatedProducts;
