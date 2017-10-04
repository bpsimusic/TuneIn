import {fetchStations} from "../util/stationsAPIUtil";
import {FETCHSTATIONS, receiveStations} from "../actions/stationsActions";

const StationsMiddleware = ({getState, dispatch}) => next => action => {
  const successCallback = stations => dispatch(receiveStations(stations));
  switch(action.type) {
    case FETCHSTATIONS:
      fetchStations(successCallback);
      return next(action);
    default:
      return next(action);
  }
};

export default StationsMiddleware;
