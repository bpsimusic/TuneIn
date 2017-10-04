import { applyMiddleware } from 'redux';
import StationsMiddleware from './stationsMiddleware';

const RootMiddleware = applyMiddleware(
  StationsMiddleware
);

export default RootMiddleware;
