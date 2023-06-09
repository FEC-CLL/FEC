/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import Card from './Card';

function RelatedProducts({
  initProd, relatedProducts,
}) {
  // Will only render 3 products at a time
  const [currentView, setCurrentView] = useState([]);
  const [index, setIndex] = useState();
  const [offset, setOffset] = useState();
  const [modalPosition, setModalPosition] = useState(0);
  const listLength = relatedProducts.length;
  const styles = {
    transform: `translate(${offset}px)`,
  };

  useEffect(() => {
    setIndex(1);
    setOffset(0);
    if (relatedProducts.length) {
      setCurrentView(relatedProducts);
    }
  }, [relatedProducts]);

  const moveRight = () => {
    // alert('Moving right');
    if (index <= listLength - 3) {
      setIndex(index + 1);
      setOffset(-((index) * 500));
      setModalPosition(-offset);
    }
  };

  const moveLeft = () => {
    // alert('Moving left');
    if (index > 1) {
      setIndex(index - 1);
      setOffset(offset + 500);
      setModalPosition(-offset);
    }
  };

  return (
    // left arrow
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

      {/* Related products list */}
      <div className="rp-card-map-wrap">
        <div className="rp-card-map" data-testid="rp-list" style={styles}>
          {currentView.map((product) => (
            <Card
              initProd={initProd}
              product={product}
              key={product.id}
              modalPosition={modalPosition}
            />
          ))}
        </div>
      </div>

      {/* right arrow */}
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
