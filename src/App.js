import React from 'react';

//UI
import { Grid, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    color: 'white',
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: 'white',
    width: '50%',
  },
}));

const App = () => {
  const classes = useStyles();

  const handleSearch = () => {};

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.wrapper}>
        <Paper elevation={3} className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              Select
            </Grid>
            <Grid item xs={12}>
              <Button variant='contained' color='primary' onClick={handleSearch}>
                Buscar
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default App;
