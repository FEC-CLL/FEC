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
          {
            ['1', '2', '3', '4', '5'].map((id) => (
              <>
                <input
                  type="radio"
                  name={charName}
                  value={id * 1}
                  id={id}
                  checked={charVar === id}
                  onChange={(e) => { onOptionChange(e, setCharVar); }}
                  required
                />
                <label htmlFor={id}>{charDescriptionArr[id * 1 - 1]}</label>
              </>
            ))
          }
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
