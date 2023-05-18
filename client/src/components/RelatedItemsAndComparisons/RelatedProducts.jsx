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
  const [index, setIndex] = useState();
  const [width, setWidth] = useState();
  const listLength = relatedProducts.length;
  const styles = {
    transform: `translate(${width}px)`,
  };

  useEffect(() => {
    setIndex(1);
    setWidth(0);
    if (relatedProducts.length) {
      // Store relatedProducts to currentView
      setCurrentView(relatedProducts);
    }
  }, [relatedProducts]);

  // Need to translate 380px
  const moveRight = () => {
    // TODO: shift products list to right
    alert('Moving right');
    if (index <= listLength - 3) {
      setIndex(index + 1);
      setWidth(-((index) * 380));
    }
  };

  const moveLeft = () => {
    // TODO: shift products list to left
    alert('Moving left');
    if (index > 1) {
      setIndex(index - 1);
      setWidth(width + 380);
    }
  };

  // Below in the html I need to add left and right arrow buttons
  // Arrow buttons should be hidden/unclickable based on position of list
  // Should do movement validation within html
  return (
    <div className="rp-list-container">
      {index !== 1
        ? (
          <div className="rp-left-arrow" onClick={() => moveLeft()}>
            <button type="button">&#5176;</button>
          </div>
        )
        : (
          <div className="rp-left-arrow">
            <button type="button">&#5176;</button>
          </div>
        )}

      <div className="rp-card-map" data-testid="rp-list" style={styles}>
        {currentView.map((product) => (
          <Card
            initProd={initProd}
            updateProduct={updateProduct}
            product={product}
            key={product.id}
          />
        ))}
      </div>

      {(index <= listLength - 3 && listLength >= 3)
        ? (
          <div className="rp-right-arrow" onClick={() => moveRight()}>
            <button type="button">&#5171;</button>
          </div>
        )
        : (
          <div className="rp-right-arrow">
            <button type="button">&#5171;</button>
          </div>

        )}
    </div>
  );
}

export default RelatedProducts;
