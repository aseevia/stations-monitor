import { render, screen } from '@testing-library/react';
import StationsMonitor from './StationsMonitor';
import Modal from 'react-modal';
Modal.setAppElement(document.createElement('div'));

test('Renders "Your stations" header and "Loading stations..." text', () => {
  render(<StationsMonitor />);
  const headerElement = screen.getByText(/Your stations/i);
  const loadingElement = screen.getByText(/Loading stations.../i);
  expect(headerElement).toBeInTheDocument();
  expect(loadingElement).toBeInTheDocument();
});
