import * as React from 'react';

import { render, initialState } from '../../test-utils';

import Chart from '../../src/components/Chart';

describe('<Chart />', () => {
  it('Renders in DOM', () => {
    render(<Chart />, {
      initialState,
    });
  });

  it('Expects to render an empty state', () => {
    const list = {
      28457823: Array.from(52).fill(0),
    };

    const { getByText } = render(<Chart id={28457823} />, {
      initialState: {
        ...initialState,
        Repositories: { ...initialState.Repositories, activity: { ...list } },
      },
    });

    const noDataMessage = getByText('Nenhum histórico de commits encontrado');
    expect(noDataMessage).toBeDefined();
  });
});
