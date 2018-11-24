import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import Thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import throttle from 'lodash/throttle';

import { IS_DEVELOPMENT } from './environment';
import { loadState, saveState } from './persistance';

const INITIAL_STATE = {};
const DEFAULT_ACTION = {};

const reducer = (state = INITIAL_STATE, action = DEFAULT_ACTION) => {
  const { payload = {} } = action;

  return {
    ...state,
    ...payload
  };
};

const Logger = createLogger({ collapsed: true });
const middleware = [Thunk];

if (IS_DEVELOPMENT) {
  middleware.push(Logger);
}

const enhancer = composeWithDevTools(applyMiddleware(...middleware));

export const store = createStore(reducer, loadState(), enhancer);
store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

export const setState = state => {
  store.dispatch({
    type: 'SET_STATE',
    payload: state
  });
};

export const dispatchAction = action => {
  store.dispatch(action);
};

export const dispatchThunk = thunk => (dispatch, getState) => {
  thunk(dispatch, getState);
};

export const withProvider = WrappedComponent => props => (
  <Provider store={store}>
    <WrappedComponent store={store} {...props} />
  </Provider>
);
