import React from 'react';
import { render, screen } from '@testing-library/react';
import Stuff from './Stuff';

import ExternalServices, { IEmployee } from '../services/ExternalService';

test('renders Stuff control', async () => {
  let emp: IEmployee[] = [{
    id: 1,
    name: 'bob',
    email: 'bob@bob.com'
  }];

  ExternalServices.prototype.getEmployees = jest.fn().mockResolvedValue(emp);

  render(<Stuff />);
  const stuffPage = screen.getByText(/stuff page/i);
  expect(stuffPage).toBeInTheDocument();
  expect(await screen.findByText(/bob/i)).toBeInTheDocument();
});