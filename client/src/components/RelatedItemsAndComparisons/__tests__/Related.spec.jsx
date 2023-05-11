import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import RelatedItemsAndComContainer from '../RelatedItemsAndComContainer';
import mockProduct from '../../../../../sampleData/product.json';
import mockProductsRelated from '../../../../../sampleData/productRelated.json';

jest.mock('axios');
axios.get.mockResolvedValue({ data: mockProductsRelated });

describe('Related Products and Outfits', () => {
  test('Should render related products list', () => {
    render(<RelatedItemsAndComContainer initProd={mockProduct} />);
    expect(screen.getByText('Related Products')).toBeInTheDocument();
  });
  test('Should render outfits list', () => {
    render(<RelatedItemsAndComContainer initProd={mockProduct} />);
    expect(screen.getByText('Outfits')).toBeInTheDocument();
  });

});
