import React from 'react';

const Outfits = () => {
  // TODO: render an add to outfit card
  // Mind bender: How am I going to keep track of an outfit list pertaining to each user? Even after they leave the website...? @_@
  // Thought: I may need to create another component to render outfit cards; But I wonder if I could reuse my existing cards and just replace the star with an X?
  // Thought: I'm also probably going to need another html section where it maps thru a user's outfit list and renders each product card

  return (
    <div className="addToOutfit">
      <h3>Add To Outfit</h3>
    </div>
  );
};

export default Outfits;
