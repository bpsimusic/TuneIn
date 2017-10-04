import { applyMiddleware } from 'redux';
import StationsMiddleware from './stationsMiddleware';
import ProfileMiddlware from './profileMiddleware';

const RootMiddleware = applyMiddleware(
  ProfileMiddlware, StationsMiddleware
);


export default RootMiddleware;
