import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders home page', () => {
  render(<App />);
  const homePage = screen.getByText(/home page/i);
  expect(homePage).toBeInTheDocument();
});

test('navigate to about page', () => {
  render(<App />);
  const aboutLink = screen.getByText(/about/i);
  fireEvent.click(aboutLink);
  const aboutPage = screen.getByText(/about page/i);
  expect(aboutPage).toBeInTheDocument();
})

test('navigage to users page', () => {
  render(<App />);
  const usersLink = screen.getByText(/users/i);
  fireEvent.click(usersLink);
  const usersPage = screen.getByText(/users page/i);
  expect(usersPage).toBeInTheDocument();

})