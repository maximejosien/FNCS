import GetStations from "./GetStations";

it('get stations with city', async () => {
  const result = new GetStations({address: jest.fn()});

  // result.fetchSNCF() = jest.fn().mockResolvedValue(
  //   []
  // );

  expect(result.state.stations).toEqual([]);

});
