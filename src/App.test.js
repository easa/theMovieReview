import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders landing link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/SIGN_IN/i);
  expect(linkElement).toBeInTheDocument();
});
