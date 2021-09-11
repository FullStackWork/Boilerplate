import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';
import { createLogger } from 'redux-logger';

let middleware = [thunkMiddleware.withExtraArgument({ axios }), createLogger()];

const rootReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(rootReducer, applyMiddleware(...middleware));
export default store;
