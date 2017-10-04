const _default = {
  stream: {}
};

const StreamReducer = (state = _default, action)=>{
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    default:
      return state;
  }
};

export default StreamReducer;
