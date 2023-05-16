import React from 'react';
import { render, waitFor } from '@testing-library/react';
import axios from 'axios';
import App from '../App';
import mockProduct from '../../../../sampleData/product.json';
import Product from '../Overview/Product';
import RelatedItems from '../RelatedItemsAndComparisons/RelatedItemsAndComContainer';
import QandA from '../QandA/QandAContainer';
import Ratings from '../RatingsAndReviews/RatingsAndReviewsContainer';

jest.mock('axios');
jest.mock('../Overview/Product');
jest.mock('../RelatedItemsAndComparisons/RelatedItemsAndComContainer');
jest.mock('../QandA/QandAContainer');
jest.mock('../RatingsAndReviews/RatingsAndReviewsContainer');
axios.get.mockResolvedValue({ data: mockProduct });

describe('App', () => {
  test('renders App', async () => {
    render(<App />);
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(Product).toHaveBeenCalledTimes(1);
      expect(RelatedItems).toHaveBeenCalledTimes(1);
      expect(QandA).toHaveBeenCalledTimes(1);
      expect(Ratings).toHaveBeenCalledTimes(1);
    });
  });
});
