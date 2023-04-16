import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';
import Nav from './Nav';
import BookingForm from './Nav/BookingPage';


test("test initial state", () => {
  render(<Nav/>)
  const ss =screen.getByTestId('resv btn')
  expect(ss).toBeInTheDocument('Reservation')
});

test("Initial time", () =>{
  const ss = render(<Nav/>)
  expect(ss.initializeTimes).toHaveReturned()
});
