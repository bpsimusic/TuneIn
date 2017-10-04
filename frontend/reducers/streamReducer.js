import {RECEIVE_STREAM} from '../actions/streamActions';


const _default = {
  stream: ""
};

const StreamReducer = (state = _default, action)=>{
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    case RECEIVE_STREAM:
      newState.stream = action.stream;
      return newState;
    default:
      return state;
  }
};

export default StreamReducer;
