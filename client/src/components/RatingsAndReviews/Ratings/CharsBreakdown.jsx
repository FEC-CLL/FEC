/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-restricted-syntax */
import React from 'react';

const charsObj = {
  Size: ['A size too small', '½ a size too small', 'Perfect', '½ a size too big',
    'A size too wide'],
  Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
  Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
  Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
  Length: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long',
    'Runs long'],
  Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'],
};

function CharsBreakdown({ metaData }) {
  const metaChars = metaData.characteristics;
  if (metaChars) {
    const charNames = Object.keys(metaChars);
    const charRating = Object.values(metaChars);

    return (
      <div className="ratingsCharsBreakdown">
        {
          charNames.map((char, i) => (
            <CharBreakdown
              char={char}
              size={`${(charRating[i].value * 100) / 5}%`}
            />
          ))
        }
      </div>
    );
  }
}

function CharBreakdown({ char, size }) {
  return (
    <div className="ratingCharBreakdown">
      <div className="ratingCharName">{char}</div>
      <div className="ratingCharMiddle">
        <div className="bar-container">
          <div className="charbar" style={{ width: size }}>
            <img className="ratingCharPointer" src="./assets/icons/triangle.png" width="12px" height="12px" />
          </div>
        </div>
      </div>
      <div className="ratingCharValues">
        <div className="ratingCharValues0">{charsObj[char][0]}</div>
        <div className="ratingCharValues2">{charsObj[char][2]}</div>
        <div className="ratingCharValues4">{charsObj[char][4]}</div>
      </div>
    </div>
  );
}

export default CharsBreakdown;
