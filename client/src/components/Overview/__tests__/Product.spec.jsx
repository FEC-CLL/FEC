import React from 'react';
import { render, screen } from '@testing-library/react';
import Product from '../Product';
import mockProduct from '../../../../../sampleData/product.json';

describe('Product', () => {
  test('renders Product component', () => {
    render(<Product product={mockProduct} />);
    expect(screen.getByText('Add to Cart')).toBeInTheDocument();
  });
  test('changes main image upon style selection', () => {
    render(<Product product={mockProduct} />);
    expect(screen.queryByAltText('Desert Brown & Tan').toHaveBeenCalledTimes(1));
  });
});

//mock product
//change main image upon style change
