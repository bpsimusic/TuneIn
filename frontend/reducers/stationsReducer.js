const _default = {
  stations: []
};

const StationsReducer = (state = _default, action)=>{
  Object.freeze(state);
  let newState = {};
  switch(action.type){
    default:
      return state;
  }
};

export default StationsReducer;
