import React from 'react';

// When the user click the card below
// I need to pass in the current product to this component
// Add current product to local storage
// Then store that product to an array state
// There should be a useEffect checking that array state/local storage
// If there is a change to that array state
// useEffect will trigger and display a mapping of
// that array state as a product card
// There should be validation so no duplicate products are added
// if already exists in array state

function Outfits() {
  return (
    <div className="addToOutfit">
      <h3>Add To Outfit</h3>
      <p>Click To Add Current Product To Outfit</p>
    </div>
  );
}

export default Outfits;
