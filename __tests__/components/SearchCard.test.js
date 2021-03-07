import * as React from 'react';

import { render, fireEvent, initialState } from '../../test-utils';
import { getByTestId } from '@testing-library/dom';

import SearchCard from '../../src/components/SearchCard';

describe('<SearchCard />', () => {
  it('Renders in DOM', () => {
    render(<SearchCard />, { initialState });
  });

  it('Expects to fire the onClick event when button is pressed in the DOM', () => {
    const { container } = render(<SearchCard />, { initialState });

    const searchButton = getByTestId(container, 'search-button');
    expect(searchButton).toBeDefined();

    fireEvent.click(searchButton);
  });
});
