import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { render, screen } from '@testing-library/react';

import Queries from './Queries';

const queryClient = new QueryClient();

beforeEach(() => {
  jest.clearAllMocks();
})

test('ensure node env in "test"', () => {
  expect(process.env.NODE_ENV).toBe('test');
});

test('renders Queries control', async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <Queries />
    </QueryClientProvider>
  );

  const queriesPage = screen.getByText(/queries page/i);
  expect(queriesPage).toBeInTheDocument();
  
  const loadingText = screen.getByText(/loading/i);
  expect(loadingText).toBeInTheDocument();
  
  const productList = await screen.findByText(/shoe/i, {}, { timeout: 3000 });
  expect(productList).toBeInTheDocument();
});