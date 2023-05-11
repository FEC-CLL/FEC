import React from 'react';
import { render, screen } from '@testing-library/react';
import Product from '../Product';
import sampleProduct from '../../../../../sampleData/product.json';
import sampleProductStyles from '../../../../../sampleData/productStyles.json';

describe('Product', () => {
  test('renders Product component', () => {
    const data = {
      ...sampleProduct,
      ...sampleProductStyles,
    };
    render(<Product product={data} />);
    expect(screen.getByText('Add to Cart')).toBeInTheDocument();
  });
});
