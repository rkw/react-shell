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

test('navigage to stuff page', () => {
  render(<App />);
  const stuffLink = screen.getByText(/stuff/i);
  fireEvent.click(stuffLink);
  const stuffPage = screen.getByText(/stuff page/i);
  expect(stuffPage).toBeInTheDocument();

})