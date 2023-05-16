import React, { useState, useEffect } from 'react';

function ComparisonModal({
  handleCompareClick, initProd, product,
}) {
  const [features, setFeatures] = useState([]);
  const [viewProduct, setViewProduct] = useState(null);
  const [compareProduct, setCompareProduct] = useState(null);

  // Or I can just use '√' and 'X'...

  useEffect(() => {
    const view = {};
    const compare = {};
    const feature = [];

    const featuresContainer = [...initProd.features, ...product.features];

    featuresContainer.forEach((featuresObj) => {
      if (!feature.includes(featuresObj)) {
        feature.push(featuresObj.feature);
      }
    });

    initProd.features.forEach((featureObj) => {
      if (!view[featureObj.feature]) {
        view[featureObj.feature] = featureObj.value;
      }
    });

    product.features.forEach((featureObj) => {
      if (!compare[featureObj.feature]) {
        compare[featureObj.feature] = featureObj.value;
      }
    });

    setViewProduct(view);
    setCompareProduct(compare);
    setFeatures(feature);
  });

  // Helper functions that return features html
  const sameCategory = (feature) => (
    <tr className="cm-same">
      {viewProduct[feature]
        ? <th>{viewProduct[feature] || '√'}</th>
        : <th><p>X</p></th>}

      <h3>{feature}</h3>

      {compareProduct[feature]
        ? <th>{compareProduct[feature] || '√'}</th>
        : <th><p>X</p></th>}
    </tr>
  );

  const diffCategory = (feature) => (
    <tr className="cm-diff">
      {viewProduct[feature]
        ? <th>{viewProduct[feature] || '√'}</th>
        : <th><p>X</p></th>}

      <h3>{feature}</h3>

      {compareProduct[feature]
        ? <th>{compareProduct[feature] || '√'}</th>
        : <th><p>X</p></th>}
    </tr>
  );

  return (
    <div className="modal">
      <div className="overlay">
        <div className="modalContent">
          <div className="rp-modal-header">
            <h2 className="rp-modal-title">Comparing</h2>
          </div>
          <div className="rp-modal-body">
            Comparing
            {' '}
            {initProd.name}
            {' '}
            to
            {' '}
            {product.name}
            <table>
              <thead>
                <tr>
                  <th>{initProd.name}</th>
                  <th>Characteristics</th>
                  <th>{product.name}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {initProd.category === product.category && features.length
                    ? features.map((compare) => sameCategory(compare))
                    : features.map((compare) => diffCategory(compare))}
                </tr>
              </tbody>
            </table>
          </div>
          <button
            className="closeModal"
            type="button"
            onClick={() => {
              handleCompareClick();
            }}
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
}

export default ComparisonModal;
