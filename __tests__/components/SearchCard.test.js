import * as React from 'react';

import { render, fireEvent } from '../../test-utils';

import SearchCard from '../../src/components/SearchCard';
import { getByTestId } from '@testing-library/dom';

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

describe('SearchCard', () => {
  it('should render a <div />, with a <button /> and click on the button', () => {
    const { container } = render(<SearchCard />, { initialState });

    const searchButton = getByTestId(container, 'search-button');
    fireEvent.click(searchButton);
  });
});
