export const FETCH_STATIONS = "FETCH_STATIONS";
export const RECEIVE_STATIONS = "RECEIVE_STATIONS";


export const fetchStations = () => {
  return {
    type: FETCH_STATIONS
  };
};

export const receiveStations = (stations) => ({
  type: RECEIVE_STATIONS,
  stations
});
