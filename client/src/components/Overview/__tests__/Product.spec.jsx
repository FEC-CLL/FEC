import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Product from '../Product';
import mockProduct from '../../../../../sampleData/product.json';

describe('Product', () => {
  test('renders Product component', () => {
    render(<Product product={mockProduct} />);
    expect(screen.getByText('Add to Cart')).toBeInTheDocument();
  });
  test('changes main image upon style selection', async () => {
    render(<Product product={mockProduct} />);
    userEvent.click(screen.getByTitle('Desert Brown & Tan'));
    expect(await screen.findByAltText('Desert Brown & Tan')).toBeInTheDocument();
  });
});
