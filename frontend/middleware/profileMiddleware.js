import {fetchProfile} from "../util/profileAPIUtil";
import {FETCH_PROFILE, receiveProfile} from "../actions/profileActions";

const ProfileMiddleware = ({getState, dispatch}) => next => action => {
  const successCallback = profile => dispatch(receiveProfile(profile));
  const errorCallback = err => console.log(err);

  switch(action.type) {
    case FETCH_PROFILE:
      fetchProfile(action.id, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};

export default ProfileMiddleware;
