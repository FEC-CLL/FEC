// This component will contain both the related items and outfits list
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedProducts from './RelatedProducts';
import './styles.css';


const RelatedItemsAndComContainer = ({initProd}) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  console.log(initProd);
  useEffect(() => {
    // Retrieve all related products
    // Pass down related products to Card and related products componenent
    axios.get('/related/40344')
      .then((response) => {
        // Should respond back with an array of related products
        console.log(response.data);
        setRelatedProducts(response.data);
      })
      .catch((err) => {
        console.error(err);
      })
  }, []);

  return (
    <div className="relatedContainer">
      <div className="relatedList">
        Related Products
        <RelatedProducts />
      </div>

      <div className="outfitsList">
        Outfits
      </div>

    </div>
  );
};

export default RelatedItemsAndComContainer;
