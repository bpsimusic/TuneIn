import {CLEAR_PROFILE, RECEIVE_PROFILE} from '../actions/profileActions';

const _default = {
  profile: {}
};

const ProfileReducer = (state = _default, action)=>{
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    case RECEIVE_PROFILE:
      newState.profile = action.profile;
      return newState;
    case CLEAR_PROFILE:
      newState.profile = {};
      return newState;
    default:
      return state;
  }
};

export default ProfileReducer;
