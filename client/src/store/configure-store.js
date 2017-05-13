import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import rootReducer from '../reducers';
import {createStore, applyMiddleware} from 'redux';



const middlewares = [
  thunkMiddleware
];

if (process.env.NODE_ENV === `development`) {
  const logger = createLogger({
    collapsed: true,
    diff: true
  });
  middlewares.push(logger);
}


export default (initialState) => { 
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
};