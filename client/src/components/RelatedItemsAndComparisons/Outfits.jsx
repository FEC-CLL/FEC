import React from 'react';

function Outfits() {
  // Thought: I'm also probably going to need another html section 
  // where it maps thru a user's outfit list and renders each product card

  const handleAddToOutfit = (event) => {
    event.preventDefault();
    alert('Current product added to outfit');
  };

  return (
    <div className="addToOutfit">
      <h3>Add To Outfit</h3>

    </div>
  );
};

export default Outfits;
