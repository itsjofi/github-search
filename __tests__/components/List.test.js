import * as React from 'react';

import { render, initialState, fireEvent } from '../../test-utils';
import { mockList } from '../../__mocks__/list';

import List from '../../src/components/List';

describe('<List />', () => {
  it('Render in DOM', () => {
    render(<List />, { initialState });
  });

  it('Expects to render the list with five results', () => {
    render(<List />, {
      initialState: {
        ...initialState,
        Repositories: {
          ...initialState.Repositories,
          list: { ...mockList },
        },
      },
    });
  });

  it('Expects to render the list with five results and fire an onClick event on each one', () => {
    const { getAllByRole } = render(<List />, {
      initialState: {
        ...initialState,
        Repositories: {
          ...initialState.Repositories,
          list: { ...mockList },
        },
      },
    });

    const listItems = getAllByRole('listitem');
    expect(listItems).toHaveLength(5);

    listItems.forEach(item => fireEvent.click(item));
  });
});
