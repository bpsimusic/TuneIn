import {RECEIVE_STATIONS} from '../actions/stationsActions';

const _default = {
  stations: []
};

const StationsReducer = (state = _default, action)=>{
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    case RECEIVE_STATIONS: {
      
      newState.stations = action.stations.data;
      return newState;
    }
    default:
      return state;
  }
};

export default StationsReducer;
