import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductStar from '../ProductStar';

describe('ProductStar', () => {
  test('renders 3.5 stars where there are three filled stars, one 1/2 filled star, and one unfilled star', () => {
    render(<ProductStar averageReview={3.5} />);
    expect(screen.queryAllByTitle('filled star')).toHaveLength(3);
    expect(screen.queryAllByTitle('half star')).toHaveLength(1);
    expect(screen.queryAllByTitle('unfilled star')).toHaveLength(1);
  });
});
