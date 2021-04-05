import { render, screen } from '@testing-library/react';
import StationsDetails from './StationsDetails';

const testItem = {name: "Station name test", available: 1, "station_ID":101 };

describe('Station details', () => {
  test('Station details renders station name in the header', () => {
    render(<StationsDetails item={testItem}/>);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Station name test');
    // screen.debug();
  });
  test('Station details renders a list and appropriate number of items', () => {
    render(<StationsDetails item={testItem}/>);
    const items = screen.getAllByRole('listitem');
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(items.length).toBe(3);
  });
  test('Station details renders proper keys and values for provided details', () => {
    render(<StationsDetails item={testItem}/>);
    const items = screen.getAllByRole('listitem');
    const keys = items.map(item => item.firstChild.textContent);
    const values = items.map(item => item.lastChild.textContent);
    expect(keys).toEqual([ 'name', 'available', 'station_ID' ]);
    expect(values).toEqual([ 'Station name test', '1', '101' ]);
  });
});
