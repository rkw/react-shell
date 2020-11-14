import React from 'react';
import { render, screen } from '@testing-library/react';
import Stuff from './Stuff';

test('ensure node env in "test"', () => {
  expect(process.env.NODE_ENV).toBe('test');
});

test('renders Stuff control', async () => {
  render(<Stuff />);

  const stuffPage = screen.getByText(/stuff page/i);
  expect(stuffPage).toBeInTheDocument();
  expect(await screen.findByText(/bob@bob.com/i)).toBeInTheDocument();
});