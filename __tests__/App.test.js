import * as React from 'react';

import { render, initialState } from '../test-utils';

import App from '../src/App';

describe('<App />', () => {
  it('Renders the root <App /> component in DOM', () => {
    render(<App />, { initialState });
  });
});
