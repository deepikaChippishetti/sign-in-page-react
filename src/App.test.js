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
    test('test case for div', () => {
      render(<App />);
      const inputelement = screen.getByTestId("div");
        expect(inputelement).toBeInTheDocument();
      });
      test("renders form firstname", () => {
        render(<App />);
        const name = screen.getByText("First Name");
        expect(name).toBeInTheDocument();
      });
      test("renders form lastname", () => {
        render(<App />);
        const name = screen.getByText("Last Name");
        expect(name).toBeInTheDocument();
      });
      test("renders form email", () => {
        render(<App />);
        const name = screen.getByText("Email");
        expect(name).toBeInTheDocument();
      });
      test("renders form phonenumber", () => {
        render(<App />);
        const name = screen.getByText("Phone Number");
        expect(name).toBeInTheDocument();
      });