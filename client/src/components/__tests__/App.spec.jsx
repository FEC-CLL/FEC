import React from 'react';
import { render, waitFor } from '@testing-library/react';
import {
  useLoaderData,
} from 'react-router-dom';
import App from '../App';
import mockProduct from '../../../../sampleData/product.json';
import Product from '../Overview/Product';
import RelatedItems from '../RelatedItemsAndComparisons/RelatedItemsAndComContainer';
import QandA from '../QandA/QandAContainer';
import Ratings from '../RatingsAndReviews/RatingsAndReviewsContainer';

jest.mock('../Overview/Product');
jest.mock('../RelatedItemsAndComparisons/RelatedItemsAndComContainer');
jest.mock('../QandA/QandAContainer');
jest.mock('../RatingsAndReviews/RatingsAndReviewsContainer');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLoaderData: jest.fn(),
}));

useLoaderData.mockResolvedValue(mockProduct);

describe('App', () => {
  test('renders App', async () => {
    render(<App />);
    await waitFor(() => {
      expect(useLoaderData).toHaveBeenCalledTimes(1);
      expect(Product).toHaveBeenCalledTimes(1);
      expect(RelatedItems).toHaveBeenCalledTimes(1);
      expect(QandA).toHaveBeenCalledTimes(1);
      expect(Ratings).toHaveBeenCalledTimes(1);
    });
  });
});
