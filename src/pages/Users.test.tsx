import React from 'react';
import { render, screen } from '@testing-library/react';
import Users from './Users';

test('ensure node env in "test"', () => {
  expect(process.env.NODE_ENV).toBe('test');
});

test('renders Users control', async () => {
  render(<Users />);

  const usersPage = screen.getByText(/users page/i);
  expect(usersPage).toBeInTheDocument();
  expect(await screen.findByText(/bob@bob.com/i, {}, { timeout: 3000 })).toBeInTheDocument();
});