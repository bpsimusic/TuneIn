const _default = {
  profile: {}
};

const ProfileReducer = (state = _default, action)=>{
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    default:
      return state;
  }
};

export default ProfileReducer;
