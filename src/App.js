import React from 'react';

//COMPONENTS
import { SearchCard } from './components';

//UI
import { Grid } from '@material-ui/core';
import { useStyles } from './App.style';

const App = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={0} className={classes.container}>
      <Grid item xs={12} className={classes.wrapper}>
        <SearchCard />
      </Grid>
    </Grid>
  );
};

export default App;
