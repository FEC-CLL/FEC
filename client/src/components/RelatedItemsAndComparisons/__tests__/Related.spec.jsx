import React from 'react';
import { render, screen } from '@testing-library/react';
import RelatedItemsAndComContainer from '../RelatedItemsAndComContainer';

describe('Related Products and Outfits', () => {
  test('Should render related products list', () => {
    render(<RelatedItemsAndComContainer />);
    expect(screen.getByText('Related Products and Outfits')).toBeInTheDocument();
  });
});
