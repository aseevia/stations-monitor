import { rest } from 'msw'
import { setupServer } from 'msw/node'
import StationsDataService from './StationsDataService';

const dataService = new StationsDataService();

const mockStations = [
  {
    "station_ID":101,
    "custom_evse_id":null,
    "location_ID":101,
    "seller_ID":27,
    "name":"Endesa",
    "connected":1,
    "position":"60.868623,26.702901",
    "available":0,
    "lastconnect":"2019-02-22T13:35:48.000Z",
    "roaming_identifier_cpo":"FI*001"
 },
 {
    "station_ID":102,
    "custom_evse_id":null,
    "location_ID":102,
    "seller_ID":27,
    "name":"Endesa 2",
    "connected":1,
    "position":"60.868623,26.702901",
    "available":0,
    "lastconnect":"2019-02-22T13:36:12.000Z",
    "roaming_identifier_cpo":"FI*001"
 },
];

const server = setupServer(
  rest.get('/stations.json', (req, res, ctx) => {
    return res(ctx.json(mockStations))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


test('Renders list of stations', async () => {
  const stations = await dataService.get('/stations.json');
  expect(stations).toBeDefined();
  expect(stations).toEqual(mockStations);
});

