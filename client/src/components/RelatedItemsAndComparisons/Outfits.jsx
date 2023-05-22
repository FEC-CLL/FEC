/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import Card from './Card';

function Outfits({ initProd }) {
  const [closet, setCloset] = useState([]);
  const [index, setIndex] = useState(1);
  const [offset, setOffset] = useState(0);
  const listLength = closet.length;
  const styles = {
    transform: `translate(${offset}px)`,
  };

  // Outfit event handlers
  const addToOutfit = () => {
    if (closet.filter((item) => item.id === initProd.id).length < 1) {
      setCloset([...closet, ...[initProd]]);
    }
    console.log(closet);
  };

  const removeFromOutfit = (prodID) => {
    alert('removing from outfit');
    const outfitsArray = JSON.parse(window.localStorage.getItem('userCloset'));
    outfitsArray.forEach((item, i) => {
      if (item.id === prodID) {
        outfitsArray.splice(i, 1);
      }
    });
    setCloset(outfitsArray);
  };

  // Carousel event handlers
  const moveRight = () => {
    // alert('Moving right');
    if (index <= listLength - 2) {
      setIndex(index + 1);
      setOffset(-((index) * 450));
    }
  };

  const moveLeft = () => {
    // alert('Moving left');
    if (index > 1) {
      setIndex(index - 1);
      setOffset(offset + 450);
    }
  };

  useEffect(() => {
    setCloset(JSON.parse(window.localStorage.getItem('userCloset')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('userCloset', JSON.stringify(closet));
  }, [closet]);

  return (
    <div className="outfits-list">

      {/* left arrow */}
      {index !== 1
        ? (
          <div className="outfits-left-arrow" onClick={() => moveLeft()}>
            <button type="button">&#5176;</button>
          </div>
        )
        : (
          <div className="outfits-left-arrow">
            <button type="button">&#5176;</button>
          </div>
        )}

      {/* add to outfit card */}
      <div className="add-to-outfit-card" onClick={() => { addToOutfit(); }}>
        <h3 className="add-to-outfit-text">Add to Outfit</h3>
        <svg className="plus-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="#000000" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
        </svg>
      </div>

      <div className="outfits-map-wrap">
        {/* closet list */}
        <div className="outfits-map-wrap">
          <div className="outfits-map" data-testid="outfits-map" style={styles}>
            {closet.map((product) => (
              <Card
                initProd={initProd}
                product={product}
                key={product.id}
                removeFromOutfit={removeFromOutfit}
              />
            ))}
          </div>
        </div>
      </div>

      {/* right arrow */}
      {(index <= listLength - 2 && listLength >= 2)
        ? (
          <div className="outfits-right-arrow" onClick={() => moveRight()}>
            <button type="button">&#5171;</button>
          </div>
        )
        : (
          <div className="outfits-right-arrow">
            <button type="button">&#5171;</button>
          </div>

        )}
    </div>
  );
}

export default Outfits;
