import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('should have expected label for controls', () => {
  render(<App  />);
  const element = screen.getByRole('button');
  expect(element).toBeInTheDocument();
});