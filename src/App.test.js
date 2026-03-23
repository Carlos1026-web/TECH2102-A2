import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Derek Carlos', () => {
  render(<App />);
  const linkElement = screen.getByText(/Derek Carlos/i);
  expect(linkElement).toBeInTheDocument();
});
