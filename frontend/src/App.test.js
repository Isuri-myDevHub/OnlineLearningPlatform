// src/App.test.js

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Courses link', () => {
  render(<App />);
  const coursesLink = screen.getByText(/courses/i);
  expect(coursesLink).toBeInTheDocument();
});
