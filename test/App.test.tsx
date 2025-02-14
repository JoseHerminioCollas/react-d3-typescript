import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('should have expected label for controls', () => {
  render(<App  />);
  const element = screen.getByText('Animate');
  expect(element).toBeInTheDocument();
});