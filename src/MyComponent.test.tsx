import React from 'react';
import { render, screen } from '@testing-library/react';
import MyComponent from './App';

test('renders MyComponent with correct text', () => {
  render(<MyComponent  />);
  const element = screen.getByText('XXX');
  expect(element).toBeInTheDocument();
});