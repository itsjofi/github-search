import React from 'react';

import { render as rtlRender } from '@testing-library/react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './src/redux/rootReducer';

const initialState = {
  Repositories: {
    list: {
      items: [],
      incomplete_results: false,
      total_count: 0,
    },
    activity: {},
  },
  App: {
    isLoading: false,
  },
};

const render = (ui, { initialState, ...renderOptions } = {}) => {
  const store = createStore(rootReducer, initialState);

  const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';
export { render, initialState };
