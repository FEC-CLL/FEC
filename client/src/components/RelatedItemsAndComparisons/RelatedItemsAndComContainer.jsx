// This component will contain both the related items and outfits list
import React from 'react';
import RelatedProducts from './RelatedProducts';

const RelatedItemsAndComContainer = () => {
  // HTML below will contain the lists for related products and outfits
  return (
    <div className='relatedContainer'>
      Related Products and Outfits
      <RelatedProducts />
    </div>
  );
};

export default RelatedItemsAndComContainer;
