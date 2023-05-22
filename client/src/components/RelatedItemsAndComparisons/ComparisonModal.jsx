import React, { useState, useEffect } from 'react';

function ComparisonModal({
  handleCompareClick, initProd, product, modalPosition,
}) {
  const [features, setFeatures] = useState([]);
  const [viewProduct, setViewProduct] = useState(null);
  const [compareProduct, setCompareProduct] = useState(null);
  const styles = {
    transform: `translate(${modalPosition}px)`,
  };

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
  }, []);

  // const modalTracker = (moveValue) => {
  //   // This function will track current position of modal window and will translate left or right
  // };

  // Helper functions that return features html
  const sameCategory = (feature) => (
    <tr className="compare-same">
      {viewProduct[feature]
        ? <th>{viewProduct[feature] || (<div>√</div>)}</th>
        : <th><p>X</p></th>}

      <h3>{feature}</h3>

      {compareProduct[feature]
        ? <th>{compareProduct[feature] || (<div>√</div>)}</th>
        : <th><p>X</p></th>}
    </tr>
  );

  const diffCategory = (feature) => (
    <tr className="compare-diff">
      {viewProduct[feature]
        ? <th>{viewProduct[feature] || (<div>√</div>)}</th>
        : <th><p>X</p></th>}

      <h3 className="compare-feature">{feature}</h3>

      {compareProduct[feature]
        ? <th>{compareProduct[feature] || (<div>√</div>)}</th>
        : <th><p>X</p></th>}
    </tr>
  );

  return (
    <div className="modal" style={styles}>
      <div className="overlay">
        <div className="modalContent">
          <div className="rp-modal-header">
            <h2 className="rp-modal-title">Comparing</h2>
          </div>
          <div className="rp-modal-body">
            <table>
              <thead>
                <tr>
                  <th className="current-product">{initProd.name}</th>
                  <th className="characteristics-header">Characteristics</th>
                  <th className="compare-product">{product.name}</th>
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
