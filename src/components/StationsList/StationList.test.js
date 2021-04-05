import { render, screen } from '@testing-library/react';
import StationList from './StationList';
import Station from '../Station/Station';

const listItems = [
  {
    "station_ID":101,
    "name":"Test 101",
    "available":0,
 },
 {
    "station_ID":102,
    "name":"Test 102",
    "available":1,
 }
];

describe('Station list', () => {
  test('Station List renders a list and appropriate number of items', () => {
    render(<StationList items={listItems} Item={Station}/>);
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem').length).toBe(2);
  });
  test('Station List renders proper items in the list', () => {
    render(<StationList items={listItems} Item={Station}/>);
    const headings = screen.getAllByRole('heading').map(el =>el.textContent);
    expect(headings).toEqual([ 'Test 101', 'Test 102' ]);
  });
});


