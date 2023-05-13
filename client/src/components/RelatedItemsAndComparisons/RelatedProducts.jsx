import React from 'react';
import Card from './Card';
import products from '../../../../sampleData/products.json';

// Need to have max number of card rendered between 3-4
// Would I need to send an API request for product styles as well?

function RelatedProducts() {
  const tempImg = 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80';
  return (
    <div className="relatedList" style={{ display: 'flex' }}>
      {products.map((product) => (
        <Card
          name={product.name}
          category={product.category}
          price={product.default_price}
          tempImg={tempImg}
          key={product.id}
        />
      ))}
    </div>
  );
}

export default RelatedProducts;
