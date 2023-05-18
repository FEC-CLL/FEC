/* eslint-disable react/prop-types */
import React from 'react';

function ProductCharacteristics({ char, charProp }) {
  function onOptionChange(e, setChar) {
    setChar(e.target.value);
  }

  function charRadioButtons(charVar, setCharVar, charName, charDescriptionArr) {
    return (
      <div className="addReviewChar">
        <div className="addReviewCharName">{charName}</div>
        <div className="addReviewChoices">
          <input
            type="radio"
            name={charName}
            value={1}
            id="1"
            checked={charVar === '1'}
            onChange={(e) => { onOptionChange(e, setCharVar); }}
          />
          <label htmlFor="1">{charDescriptionArr[0]}</label>

          <input
            type="radio"
            name={charName}
            value={2}
            id="2"
            checked={charVar === '2'}
            onChange={(e) => { onOptionChange(e, setCharVar); }}
          />
          <label htmlFor="2">{charDescriptionArr[1]}</label>

          <input
            type="radio"
            name={charName}
            value={3}
            id="3"
            checked={charVar === '3'}
            onChange={(e) => { onOptionChange(e, setCharVar); }}
          />
          <label htmlFor="3">{charDescriptionArr[2]}</label>

          <input
            type="radio"
            name={charName}
            value={4}
            id="4"
            checked={charVar === '4'}
            onChange={(e) => { onOptionChange(e, setCharVar); }}
          />
          <label htmlFor="4">{charDescriptionArr[3]}</label>

          <input
            type="radio"
            name={charName}
            value={5}
            id="5"
            checked={charVar === '5'}
            onChange={(e) => { onOptionChange(e, setCharVar); }}
          />
          <label htmlFor="5">{charDescriptionArr[4]}</label>
        </div>
      </div>
    );
  }

  const sizeArr = ['A size too small', '½ a size too small', 'Perfect', '½ a size too big',
    'A size too wide'];
  const widthArr = ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'];
  const comfortArr = ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'];
  const qualityArr = ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'];
  const lengthArr = ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long',
    'Runs long'];
  const fitArr = ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'];

  return (
    <div>
      <div className="modal-component-title">*Product Characteristics</div>

      {char && char.Size ? charRadioButtons(charProp.size, charProp.setSize, 'Size', sizeArr) : ''}
      {char && char.Width ? charRadioButtons(charProp.width, charProp.setWidth, 'Width', widthArr) : ''}
      {char && char.Comfort ? charRadioButtons(charProp.comfort, charProp.setComfort, 'Comfort', comfortArr) : ''}
      {char && char.Quality ? charRadioButtons(charProp.quality, charProp.setQuality, 'Quality', qualityArr) : ''}
      {char && char.Length ? charRadioButtons(charProp.length, charProp.setLength, 'Length', lengthArr) : ''}
      {char && char.Fit ? charRadioButtons(charProp.fit, charProp.setFit, 'Fit', fitArr) : ''}
    </div>
  );
}

export default ProductCharacteristics;
