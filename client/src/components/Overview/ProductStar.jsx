import React from 'react';

export default function ProductStar({ averageReview }) {
  const stars = [];
  let i = averageReview;
  for (; i >= 1; i -= 1) {
    stars.push(<span className="product-information__reviews--4" />);
  }
  if (i > 0 && i < 0.25) {
    stars.push(<span className="product-information__reviews--1" />);
  }
  if (i >= 0.25 && i < 0.75) {
    stars.push(<span className="product-information__reviews--2" />);
  }
  if (i >= 0.75 && i < 1) {
    stars.push(<span className="product-information__reviews--3" />);
  }
  for (let j = (5 - averageReview); j >= 1; j -= 1) {
    stars.push(<span className="product-information__reviews--0" />);
  }
  return stars;
}
