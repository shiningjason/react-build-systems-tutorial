import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import TodoApp from './components/TodoApp';
import reducers from './reducers';

const thunkMiddleware = ({ dispatch, getState }) => {
  return (next) => (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }
    return next(action);
  };
};

const composedReducer = combineReducers(reducers);
const store = createStore(
  composedReducer,
  applyMiddleware(thunkMiddleware)
);

const rootEl = document.getElementById('app');

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept(
    './reducers',
    () => store.replaceReducer(combineReducers(require('./reducers').default))
  );

  module.hot.accept(
    './components/TodoApp',
    () => {
      const NextApp = require('./components/TodoApp').default;
      ReactDOM.render(
        <AppContainer>
          <Provider store={store}>
            <NextApp />
          </Provider>
        </AppContainer>,
        rootEl
      );
    }
  );
}
