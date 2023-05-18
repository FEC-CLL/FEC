/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import Card from './Card';

// Need to have max number of card rendered between 3-4
// Need to send another API request to retrieve images

function RelatedProducts({
  initProd, relatedProducts, updateProduct,
}) {
  // Will only render 3 products at a time
  const [currentView, setCurrentView] = useState([]);

  // Move right: if there is a product that exists in the next index
  // remove first product from currentView and push next product into currentView

  // Move left: if there is a product that exists towards the left
  // remove last product and insert left product to the beginning of currentView

  // When component first mounts, store first 3 products to currentView

  useEffect(() => {
    if (relatedProducts.length) {
      // Store first 3 into currentView
      const rpContainer = [];
      for (let i = 0; i < 3; i += 1) {
        rpContainer.push(relatedProducts[i]);
      }
      setCurrentView(rpContainer);
    }
  }, [relatedProducts]);

  const moveRight = () => {
    // TODO: shift products list to right
    alert('Moving right');

    // Check if
  };

  const moveLeft = () => {
    // TODO: shift products list to left
    alert('Moving left');
  };

  // Below in the html I need to add left and right arrow buttons
  // Arrow buttons should be hidden/unclickable based on position of list
  // Should do movement validation within html
  return (
    <div className="rp-list-container">
      <div className="rp-left-arrow" onClick={() => moveLeft()}>
        <button type="button">&#5176;</button>
      </div>
      <div className="rp-card-map" data-testid="rp-list">
        {currentView.map((product) => (
          <Card
            initProd={initProd}
            updateProduct={updateProduct}
            product={product}
            key={product.id}
          />
        ))}
      </div>
      <div className="rp-right-arrow" onClick={() => moveRight()}>
        <button type="button">&#5171;</button>
      </div>
    </div>
  );
}

export default RelatedProducts;
