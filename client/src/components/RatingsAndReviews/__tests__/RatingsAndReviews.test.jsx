import { render, screen } from '@testing-library/react';
import axios from 'axios';
import RatingsAndReviewsContainer from '../RatingsAndReviewsContainer';

const testData = {
  id: 40344,
};

jest.mock('axios');
axios.get.mockResolvedValue({ data: testData });

describe('Renders Ratings & Review component to frontend', () => {
  it('should render title', () => {
    render(<RatingsAndReviewsContainer initProd={testData} />);
    const title = screen.getByText('RATINGS & REVIEWS');
    expect(title).toBeInTheDocument();
  });
});
