import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { act } from 'react';  // Correct import

test('displays numbers up to the entered number', () => {
  act(() => {
    render(<App />);
  });

  const input = screen.getByLabelText(/number/i);
  fireEvent.change(input, { target: { value: '5' } });

  expect(screen.getByText(/1, 2, 3, 4, 5/)).toBeInTheDocument();
});

test('calculates the area of a triangle', () => {
  act(() => {
    render(<App />);
  });

  const heightInput = screen.getByLabelText(/height/i);
  const widthInput = screen.getByLabelText(/width/i);

  fireEvent.change(heightInput, { target: { value: '10' } });
  fireEvent.change(widthInput, { target: { value: '5' } });

  expect(screen.getByText(/Area of Triangle: 25/)).toBeInTheDocument();
});