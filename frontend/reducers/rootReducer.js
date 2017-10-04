import {combineReducers} from 'redux';
import StreamReducer from './streamReducer';
import ProfileReducer from './profileReducer';
import StationsReducer from './stationsReducer';



const rootReducer = combineReducers({
  stream: StreamReducer,
  profile: ProfileReducer,
  stations: StationsReducer,
});

export default rootReducer;
