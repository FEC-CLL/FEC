// This component will contain both the related items and outfits list
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedProducts from './RelatedProducts';
import Outfits from './Outfits';
import './styles.css';

function RelatedItemsAndComContainer({ initProd }) {
  // eslint-disable-next-line no-unused-vars
  const [relatedProducts, setRelatedProducts] = useState([]);

  console.log('initProd: ', initProd);
  useEffect(() => {
    if (initProd.id) {
      axios.get(`/related/${initProd.id}`)
        .then((response) => {
          console.log('Array of related products data: ', response.data);
          setRelatedProducts(response.data.filter((product) => product.id !== initProd.id));
        })
        .catch((err) => {
          console.error('Couldnt get back array of related', err);
        });
    }
  }, [initProd.id]);

  return (
    <div className="relatedContainer container">
      <span className="rp-title">Related Products</span>
      <RelatedProducts
        initProd={initProd}
        relatedProducts={relatedProducts}
      />
      <div className="outfits-container">
        <span className="outfits-title">Outfits</span>
        <Outfits initProd={initProd} />
      </div>

    </div>
  );
}

export default RelatedItemsAndComContainer;
