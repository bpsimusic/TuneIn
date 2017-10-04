import {fetchStream} from "../util/streamAPIUtil";
import {FETCH_STREAM, receiveStream} from "../actions/streamActions";

const StreamMiddleware = ({getState, dispatch}) => next => action => {
  const successCallback = stream => {

    dispatch(receiveStream(stream));};
  const errorCallback = err => console.log(err);

  switch(action.type) {
    case FETCH_STREAM:
      fetchStream(action.id, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};

export default StreamMiddleware;
