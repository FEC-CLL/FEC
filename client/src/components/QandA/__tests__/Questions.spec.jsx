import { render, screen } from '@testing-library/react';
import QandAContainer from '../QandAContainer';


describe('Questions', () => {
  const testData = {
    id: 40344,
  };

  it('renders Questions component', () => {
    render(<QandAContainer product={testData} />);
    expect(screen.getByText('QUESTIONS & ANSWERS')).toBeInTheDocument();
  });
});
