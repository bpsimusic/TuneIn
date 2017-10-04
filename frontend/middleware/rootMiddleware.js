import { applyMiddleware } from 'redux';
import StationsMiddleware from './stationsMiddleware';
import ProfileMiddlware from './profileMiddleware';
import StreamMiddleware from './streamMiddleware';

const RootMiddleware = applyMiddleware(
  ProfileMiddlware, StationsMiddleware, StreamMiddleware
);


export default RootMiddleware;
