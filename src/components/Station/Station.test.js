import { render, screen } from '@testing-library/react';
import Station from './Station';

describe('Station ', () => {
  test('Station renders proper name', () => {
    render(<Station item={{name: "Station name test", available: 0 }}/>);
    const nameElement = screen.getByText(/Station name test/);
    expect(nameElement).toBeInTheDocument();
  });
  test('Station status text should be "Offline" and status icon must have src="icon_offline.svg" if availability: 0', () => {
    render(<Station item={{name: "Station offline test", available: 0 }}/>);
    const icon = screen.getByRole('img');
    const statusText = screen.getByText(/Offline/);
    expect(statusText).toBeInTheDocument();
    expect(icon).toHaveAttribute('src', 'icon_offline.svg');
  });
  test('Station status text should be "Available" and status icon must have src="icon_available.svg" if availability: 1', () => {
    render(<Station item={{name: "Station available test", available: 1 }}/>);
    const icon = screen.getByRole('img');
    const statusText = screen.getByText(/Available/);
    expect(statusText).toBeInTheDocument();
    expect(icon).toHaveAttribute('src', 'icon_available.svg');
  });
});
