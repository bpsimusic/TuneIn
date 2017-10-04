export const FETCH_PROFILE = "FETCH_PROFILE";
export const RECEIVE_PROFILE = "RECEIVE_PROFILE";
export const CLEAR_PROFILE = "CLEAR_PROFILE";


export const fetchProfile = (id) => {
  return {
    type: FETCH_PROFILE,
    id
  };
};

export const receiveProfile = (profile) => ({
  type: RECEIVE_PROFILE,
  profile
});

export const clearProfile = () => {
  return {
    type: CLEAR_PROFILE,
  };
};
