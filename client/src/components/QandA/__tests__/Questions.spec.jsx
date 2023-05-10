import { render, screen } from '@testing-library/react';
import QandAContainer from '../QandAContainer.jsx';

describe('Questions', () => {
  test('renders Questions component', () => {
    render(<QandAContainer />);
    expect(screen.getByText('Questions & Answers')).toBeInTheDocument();
  });
});
