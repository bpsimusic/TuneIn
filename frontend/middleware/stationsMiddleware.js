import {fetchStations} from "../util/stationsAPIUtil";
import {FETCH_STATIONS, receiveStations} from "../actions/stationsActions";

const StationsMiddleware = ({getState, dispatch}) => next => action => {
  const successCallback = stations => dispatch(receiveStations(stations));
  const errorCallback = err => console.log(err);
  
  switch(action.type) {
    case FETCH_STATIONS:
      fetchStations(successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};

export default StationsMiddleware;
