import React, { useState, useEffect } from 'react';

function ComparisonModal({
  handleCompareClick, initProd, product,
}) {
  // xMark and checkMark will be rendered next to comparing features
  // Or I can just use '√' and 'X'...
  const xMark = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#E51515" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>;

  const checkMark = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="14C011" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>;

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
                  <td>Row 1, Cell 1</td>
                  <td>Row 1, Cell 2</td>
                  <td>Row 1, Cell 3</td>
                </tr>
                <tr>
                  <td>Row 2, Cell 1</td>
                  <td>Row 2, Cell 2</td>
                  <td>Row 2, Cell 3</td>
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
