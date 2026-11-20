import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders initial portfolio projects', () => {
  render(<App />);
  expect(screen.getByText(/Nairobi Roasters E-Commerce/i)).toBeInTheDocument();
  expect(screen.getByText(/Savanna Health Identity/i)).toBeInTheDocument();
});

test('adds a new project dynamically when form is submitted', () => {
  render(<App />);

  fireEvent.change(screen.getByLabelText(/Project Title/i), {
    target: { value: 'Lamu Eco Lodge Site' },
  });
  fireEvent.change(screen.getByLabelText(/Description/i), {
    target: { value: 'Booking experience and photo story.' },
  });
  fireEvent.click(screen.getByRole('button', { name: /Add Project/i }));

  expect(screen.getByText(/Lamu Eco Lodge Site/i)).toBeInTheDocument();
  expect(screen.getByText(/Booking experience and photo story\./i)).toBeInTheDocument();
});

test('filters projects dynamically based on search query', () => {
  render(<App />);

  const searchInput = screen.getByLabelText(/Search Projects/i);
  fireEvent.change(searchInput, { target: { value: 'Branding' } });

  expect(screen.getByText(/Savanna Health Identity/i)).toBeInTheDocument();
  expect(screen.queryByText(/Nairobi Roasters E-Commerce/i)).not.toBeInTheDocument();
});