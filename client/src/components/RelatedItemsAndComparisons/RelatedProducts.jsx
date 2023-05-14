import React from 'react';
import Card from './Card';

// Need to have max number of card rendered between 3-4
// Need to send another API request to retrieve images

function RelatedProducts({ relatedProducts }) {
  return (
    <div className="relatedList" style={{ display: 'flex' }}>
      {relatedProducts.map((product) => (
        <Card
          product={product}
          name={product.name}
          category={product.category}
          price={product.default_price}
          key={product.id}
        />
      ))}
    </div>
  );
}

export default RelatedProducts;
