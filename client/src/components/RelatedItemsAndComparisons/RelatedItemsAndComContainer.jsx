// This component will contain both the related items and outfits list
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedProducts from './RelatedProducts';
import Outfits from './Outfits';
import './styles.css';


const RelatedItemsAndComContainer = ({initProd}) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  // console.log(initProd);
  useEffect(() => {
    // Pass down related products to Card and related products componenent
    axios.get('/related/40344')
      .then((response) => {

        console.log('Array of related products data: ', response.data);
        setRelatedProducts(response.data);
      })
      .catch((err) => {
        console.error('Couldnt get back array of related', err);
      })

      // TODO: send another API request to styles to retrieve the default style image from each related product
  }, []);

  return (
    <div className="relatedContainer">
      <div className="relatedList">
        Related Products
        <RelatedProducts relatedProducts={relatedProducts}/>
      </div>

      <div className="outfitsList">
        Outfits
        <Outfits />
      </div>

    </div>
  );
};

export default RelatedItemsAndComContainer;
