// src/App.test.js

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Courses link', () => {
  render(<App />);
  const coursesLink = screen.getByText(/courses/i);
  expect(coursesLink).toBeInTheDocument();
});

test('renders Home link', () => {
  render(<App />);
  const homeLink = screen.getByText(/home/i);
  expect(homeLink).toBeInTheDocument();
});

test('renders About link', () => {
  render(<App />);
  const aboutLink = screen.getByText(/about/i);
  expect(aboutLink).toBeInTheDocument();
});

test('renders Contact link', () => {
  render(<App />);
  const contactLink = screen.getByText(/contact/i);
  expect(contactLink).toBeInTheDocument();
});

test('renders Register link', () => {
  render(<App />);
  const registerLink = screen.getByText(/register/i);
  expect(registerLink).toBeInTheDocument();
});

test('renders Login link', () => {
  render(<App />);
  const loginLink = screen.getByText(/login/i);
  expect(loginLink).toBeInTheDocument();
});

