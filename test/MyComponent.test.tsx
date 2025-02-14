import React from 'react';
import { render, screen } from '@testing-library/react';
import MyComponent from '../src/App';

test('should have expected text', () => {
  render(<MyComponent  />);
  const element = screen.getByText('XXX');
  expect(element).toBeInTheDocument();
});