/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import RelatedItemsAndComContainer from '../RelatedItemsAndComContainer';
import RelatedProducts from '../RelatedProducts';
import Card from '../Card';
// import Outfits from '../Outfits';

// Import mock data
import mockProduct from '../../../../../sampleData/product.json';
import mockProductsRelated from '../../../../../sampleData/productRelated.json';
// import mockRelatedData from './mockData.json';

const testProduct = {
  id: 40346,
  campus: 'hr-rfp',
  name: 'Morning Joggers',
  slogan: 'Make yourself a morning person',
  description: 'Whether you\'re a morning person or not.  Whether you\'re gym bound or not.  Everyone looks good in joggers.',
  category: 'Pants',
  default_price: '40.00',
  created_at: '2021-08-13T14:38:44.509Z',
  updated_at: '2021-08-13T14:38:44.509Z',
  features: [
    {
      feature: 'Fabric',
      value: '100% Cotton',
    },
    {
      feature: 'Cut',
      value: 'Skinny',
    }],
};

jest.mock('axios');
// const handleCardClick = jest.fn();
// Testing Container
describe('Related Products and Outfits Container', () => {
  beforeEach(() => {
    axios.all.mockResolvedValue({ data: mockProductsRelated });
    axios.get.mockResolvedValue({ data: testProduct });
  });

  // afterEach(cleanup);

  // it('Should render Related Products title', () => {
  //   render(<RelatedItemsAndComContainer initProd={mockProduct} />);
  //   expect(screen.getByText('Related Products')).toBeInTheDocument();
  // });

  // it('Should render Outfits title', () => {
  //   render(<RelatedItemsAndComContainer initProd={mockProduct} />);
  //   expect(screen.getByText('Outfits')).toBeInTheDocument();
  // });

  // it('Should render Related Products List', () => {
  //   render(<RelatedProducts relatedProducts={mockProductsRelated} />);
  //   expect(screen.getByTestId(/rp-list/i)).toBeTruthy();
  // });

  // it('Should render a product card', () => {
  //   render(<Card product={testProduct} />);
  //   expect(screen.getByTestId(/rp-card/i)).toBeTruthy();
  // });

  // it('Product card name should match test name', () => {
  //   render(<Card product={mockProduct} key={mockProduct.id} />);
  //   expect(screen.getByText('Camo Onesie')).toBeInTheDocument();
  // });

  // it('Should render compare button on a product card', () => {
  //   render(<Card product={mockProduct} key={mockProduct.id} />);
  //   const compareButton = screen.getByTestId(/rp-comparebtn/i);
  //   const clicked = fireEvent.click(compareButton);
  //   expect(clicked).toBeTruthy();
  // });

  // it('Product card should be clickable', () => {
  //   render(<Card product={mockProduct} key={mockProduct.id} />);
  //   const cardButton = screen.getByTestId(/rp-card/i);
  //   const clicked = fireEvent.click(cardButton);
  //   expect(clicked).toBeTruthy();
  // });

  // it('Product card should render dynamic data', () => {
  //   render(<Card product={testProduct} />);
  //   expect(screen.getByTestId(/rp-cimage/i)).toBeTruthy();
  //   expect(screen.getByTestId(/rp-category/i)).toBeTruthy();
  //   expect(screen.getByTestId(/rp-name/i)).toBeTruthy();
  //   expect(screen.getByTestId(/rp-price/i)).toBeTruthy();
  //   expect(screen.getByTestId(/rp-rating/i)).toBeTruthy();
  // });
});
