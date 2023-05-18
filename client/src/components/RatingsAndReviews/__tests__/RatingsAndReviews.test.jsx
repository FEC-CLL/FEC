import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import RatingsAndReviewsContainer from '../RatingsAndReviewsContainer';
import ReviewList from '../ReviewList';
import ReviewReport from '../ReviewReport';
import ModalDialog from '../AddReview/ModalDialog';

const productData = {
  id: 40344,
};

const reviewsData = {
  product: '40344',
  page: 0,
  count: 2,
  results: [
    {
      review_id: 1275652,
      rating: 2,
      summary: 'hard code',
      recommend: true,
      response: null,
      body: 'sdfgsdfgsdfgsdf fsdfsdfsdf sdfsdfsdf sdfsdfsd sdfsdfsd sdfsdfsdfsd sdfsdfsdf',
      date: '2022-07-19T00:00:00.000Z',
      reviewer_name: 'asdfasdf',
      helpfulness: 1,
      photos: [
        {
          id: 2455514,
          url: 'http://res.cloudinary.com/dt5orn9wb/image/upload/v1658188917/ujjzlkdourluqxxgnh8e.jpg',
        },
      ],
    },
    {
      review_id: 1275616,
      rating: 2,
      summary: 'asdfasdf',
      recommend: true,
      response: null,
      body: 'asdfasdfadsasdfasdfadsasdfasdfadsasdfasdfadsasdfasdfadsasdfasdfadsasdfasdfadsasdfasdfadsasdfasdfadsasdfasdfads',
      date: '2022-07-18T00:00:00.000Z',
      reviewer_name: 'asdf',
      helpfulness: 1,
      photos: [
        {
          id: 2455490,
          url: 'http://res.cloudinary.com/dt5orn9wb/image/upload/v1658184786/es1bibiaqlewgo3jhhcm.jpg',
        },
      ],
    },
  ],
};

const metaData = {
  product_id: '40344',
  ratings: {
    1: '139',
    2: '201',
    3: '318',
    4: '306',
    5: '681',
  },
  recommended: {
    false: '418',
    true: '1227',
  },
  characteristics: {
    Fit: {
      id: 135219,
      value: '3.2913223140495868',
    },
    Length: {
      id: 135220,
      value: '3.3167372881355932',
    },
    Comfort: {
      id: 135221,
      value: '3.3653631284916201',
    },
    Quality: {
      id: 135222,
      value: '3.3307692307692308',
    },
  },
};

jest.mock('axios');
axios.get.mockResolvedValue({ data: reviewsData });
axios.put.mockResolvedValue({ status: 204 });
axios.post.mockResolvedValue({ status: 201 });

describe('Renders Ratings & Review component to frontend', () => {
  it('should render title', () => {
    render(<RatingsAndReviewsContainer initProd={productData} />);
    const title = screen.getByText('RATINGS & REVIEWS');
    expect(title).toBeInTheDocument();
  });

  it('should render sorting message', () => {
    render(<RatingsAndReviewsContainer initProd={productData} />);
    const title = screen.getByText('0 reviews, sorted by');
    expect(title).toBeInTheDocument();
  });

  it('should render a list of 2 reviews on first load', () => {
    render(<ReviewList allReviews={reviewsData.results} />);
    const body1 = screen.getByText(reviewsData.results[0].body);
    expect(body1).toBeInTheDocument();
  });

  it('should render helpfulness number for a review', async () => {
    render(<ReviewList allReviews={reviewsData.results} />);
    const helpfulness1 = await screen.findAllByText('(1)');
    expect(helpfulness1.length).toBe(2);
  });

  it('should increase helpfulness number for a review when clicked', async () => {
    render(<ReviewList allReviews={reviewsData.results} />);
    const helpfulness = await screen.getAllByText('Yes');
    const clicked = fireEvent.click(helpfulness[0]);

    expect(clicked).toBe(true);
  });

  it('should render Report', async () => {
    render(<ReviewReport review={reviewsData.results[0]} />);
    const report = await screen.getByText('Report');
    expect(report).toBeInTheDocument();
    const clicked = fireEvent.click(report);
    expect(clicked).toBe(true);
  });

  it('should test ModalDialog', async () => {
    render(<ModalDialog
      initProd={productData}
      metaData={metaData}
      showDialog
      setShowDialog={() => {}}
    />);
    const body = await screen.getByPlaceholderText('Why did you like the product or not?');
    const email = await screen.getByPlaceholderText('Example: jackson11@email.com');
    const nickname = await screen.getByPlaceholderText('Example: jackson11!');
    const summary = await screen.getByPlaceholderText('Example: Best purchase ever!');

    const button = await screen.getByText('SUBMIT');

    expect(button).toBeInTheDocument();

    fireEvent.change(body, { target: { value: 'a' } });
    fireEvent.change(email, { target: { value: 'a' } });
    fireEvent.change(nickname, { target: { value: 'a' } });
    fireEvent.change(summary, { target: { value: 'a' } });

    const clicked = fireEvent.click(button);

    expect(clicked).toBe(true);
  });
});
