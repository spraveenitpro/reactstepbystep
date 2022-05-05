import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('Should render same text passed into title prop', () => {
  render(<Header title="My Header"/>);
  const headingElement = screen.getByText(/My Header/i);
  expect(headingElement).toBeInTheDocument();
});

test('Should render a header', () => {
    render(<Header title="My Header"/>);
    const headingElement = screen.getByRole("heading", {name:"My Header"});
    expect(headingElement).toBeInTheDocument();
});


test('By Title', () => {
    render(<Header title="My Header"/>);
    const headingElement = screen.getByTitle("Header");
    expect(headingElement).toBeInTheDocument();
});

test('By Test id', () => {
    render(<Header title="My Header"/>);
    const headingElement = screen.getByTestId("header-1");
    expect(headingElement).toBeInTheDocument();
});

test('Find By', async () => {
    render(<Header title="My Header"/>);
    const headingElement = await screen.findByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
});

// QueryBy

test('Query By', async () => {
    render(<Header title="My Header"/>);
    const headingElement =  screen.queryByText(/dogs/i);
    expect(headingElement).not.toBeInTheDocument();
});

// Get all by Roles

test('Get all By Role', async () => {
    render(<Header title="My Header"/>);
    const headingElements =  screen.getAllByRole('heading');
    expect(headingElements.length).toBe(2)
});