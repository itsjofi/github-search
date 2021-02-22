import React from 'react';

//COMPONENTS
import { Form } from 'react-final-form';
import { Field } from '../';

//UI
import { Grid, Button, CircularProgress } from '@material-ui/core';
import { useStyles } from './index.style';

//UTILS
import { assembleQuery } from './helper';

//REDUX
import { connect } from 'react-redux';
import repositoriesActions from '../../redux/repositories/actions';

const SearchCard = props => {
  const [isLoading, setIsLoading] = React.useState(false);

  const classes = useStyles();

  const onSubmit = values => {
    const query = assembleQuery(values);

    props.fetchRepositories({}, setIsLoading);
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={formProps => {
        const { handleSubmit } = formProps;

        return (
          <form className={classes.form} onSubmit={handleSubmit} noValidate={true}>
            <Grid container spacing={2} className={classes.container}>
              <Grid item xs={12}>
                <Field mode='select' name='languages' />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type='submit'
                  disabled={isLoading}
                  fullWidth={true}
                  variant='contained'
                  color='primary'>
                  {isLoading ? <CircularProgress size={30} /> : 'Buscar'}
                </Button>
              </Grid>
            </Grid>
          </form>
        );
      }}
    />
  );
};

const { fetchRepositories } = repositoriesActions;

export default connect(
  state => ({
    list: state.Repositories.list,
  }),
  { fetchRepositories }
)(SearchCard);
