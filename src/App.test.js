import { render, screen } from '@testing-library/react';
import App from './App';

test('test case for heading', () => {
  render(<App />);
  const element = screen.getByRole("heading");
    expect(element).toBeInTheDocument();
  });
  test('test case for div', () => {
    render(<App />);
    const inputelement = screen.getByTestId("div");
      expect(inputelement).toBeInTheDocument();
    });