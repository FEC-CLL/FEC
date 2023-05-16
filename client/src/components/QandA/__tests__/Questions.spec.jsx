import { render, screen } from '@testing-library/react';
import QandAContainer from '../QandAContainer';

describe('Questions', () => {
  test('renders Questions component', () => {
    render(<QandAContainer />);
    expect(screen.getByText('QUESTIONS & ANSWERS')).toBeInTheDocument();
  });
});
