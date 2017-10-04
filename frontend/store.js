import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer';
import rootMiddleware from './middleware/rootMiddleware';

const configureStore = (preloadedState = {})=>{
  return createStore(rootReducer, preloadedState, rootMiddleware);
};

export default configureStore;
