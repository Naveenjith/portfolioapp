import { render, screen } from '@testing-library/react';
import App from './App';
import { test, expect } from "@jest/globals";
import React from 'react';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
