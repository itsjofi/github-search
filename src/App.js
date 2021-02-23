import React from 'react';

//COMPONENTS
import { SearchCard, List } from './components';

//UI
import { Grid } from '@material-ui/core';
import * as styled from './App.style';

const App = () => {
  return (
    <styled.Container>
      <Grid item xs={12}>
        <SearchCard />
      </Grid>
      <Grid item xs={12}>
        <List />
      </Grid>
    </styled.Container>
  );
};

export default App;
