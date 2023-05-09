/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import RatingsAndReviewsContainer from '../RatingsAndReviewsContainer';

describe('Renders Ratings & Review component to frontend', () => {
  const testData = {
    id: 40344,
  };

  it('should render title', () => {
    render(<RatingsAndReviewsContainer initProd={testData} />);
    const title = screen.getByText('RATINGS & REVIEWS');
    expect(title).toBeInTheDocument();
  });
});
