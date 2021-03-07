import * as React from 'react';

import { render } from '../../test-utils';

import List from '../../src/components/List';

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

describe('List', () => {
  it('should display a list of the most starred repositories, based in five languages', () => {
    render(<List />, { initialState });
  });
});
