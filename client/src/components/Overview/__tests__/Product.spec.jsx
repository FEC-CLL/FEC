import React from 'react';
import { render, screen } from '@testing-library/react';
import Product from '../Product';

describe('Product', () => {
  test('renders Product component', () => {
    render(<Product />);
    expect(screen.getByText('Add to Cart')).toBeInTheDocument();
  });
});
