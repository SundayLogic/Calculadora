import { render, fireEvent } from 'vitest';
import Calculadora from './Calculadora';

test('it calculates expressions correctly', async () => {
  const { getByText } = render(<Calculadora />);
  
  // Click the "1" button
  fireEvent.click(getByText('1'));
  expect(getByText(/^1$/)).toBeInTheDocument();  // The display should show "1"
  
  // Click the "+" button
  fireEvent.click(getByText('+'));
  expect(getByText(/^1\+$/)).toBeInTheDocument();  // The display should show "1+"
  
  // Click the "1" button again
  fireEvent.click(getByText('1'));
  expect(getByText(/^1\+1$/)).toBeInTheDocument();  // The display should show "1+1"
  
  // Click the "=" button to calculate the result
  fireEvent.click(getByText('='));
  expect(getByText(/^2$/)).toBeInTheDocument();  // The display should show "2", the result of 1+1
});

test('it shows an error when given an invalid expression', async () => {
  const { getByText } = render(<Calculadora />);
  
  // Click the "+" button first, creating an invalid expression
  fireEvent.click(getByText('+'));
  expect(getByText(/^\+$/)).toBeInTheDocument();  // The display should show "+"
  
  // Click the "=" button to try to calculate the result
  fireEvent.click(getByText('='));
  expect(getByText(/^Error$/)).toBeInTheDocument();  // The display should show "Error", since "+=" is not a valid mathematical expression
});

test('it resets the display when the "R" button is clicked', async () => {
  const { getByText } = render(<Calculadora />);
  
  // Click the "1" button
  fireEvent.click(getByText('1'));
  expect(getByText(/^1$/)).toBeInTheDocument();  // The display should show "1"
  
  // Click the "R" button to reset
  fireEvent.click(getByText('R'));
  expect(getByText(/^0$/)).toBeInTheDocument();  // The display should show "0", since we reset it
});

