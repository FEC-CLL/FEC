import React from 'react';
import { render, screen } from '@testing-library/react';
import Product from '../Product';
import mockProduct from '../../../../../sampleData/product.json';

describe('Product', () => {
  test('renders Product component', () => {
    render(<Product product={mockProduct} />);
    expect(screen.getByText('Add to Cart')).toBeInTheDocument();
  });
});
