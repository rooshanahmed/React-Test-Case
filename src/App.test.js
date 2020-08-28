import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});

test('text case', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello PIAIC/i);
  expect(linkElement).toBeInTheDocument();
});

test('text case', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello Everyone/i);
  expect(linkElement).toBeInTheDocument();
});