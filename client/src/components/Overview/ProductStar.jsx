import React from 'react';

export default function ProductStar({ averageReview }) {
  const stars = [];
  let i = averageReview;
  for (; i >= 1; i -= 1) {
    stars.push(<span title="filled star" className="product-information__reviews--4" />);
  }
  if (i > 0 && i < 0.25) {
    stars.push(<span title="one quarter star" className="product-information__reviews--1" />);
  }
  if (i >= 0.25 && i < 0.75) {
    stars.push(<span title="half star" className="product-information__reviews--2" />);
  }
  if (i >= 0.75 && i < 1) {
    stars.push(<span title="three quarter star" className="product-information__reviews--3" />);
  }
  for (let j = (5 - averageReview); j >= 1; j -= 1) {
    stars.push(<span title="unfilled star" className="product-information__reviews--0" />);
  }
  return stars;
}
