import React from 'react';

//COMPONENTS
import { Form, Field } from 'react-final-form';
import { Button, Select } from '../';

//UI
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import * as styled from './index.style';

//UTILS
import { assembleQuery } from './helper';
import { validate } from './validate';

//REDUX
import { connect } from 'react-redux';
import repositoriesActions from '../../redux/repositories/actions';

const ReactSelectAdapter = ({ input, ...rest }) => <Select {...input} {...rest} />;

const SearchCard = props => {
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = values => {
    const query = assembleQuery(values);

    props.fetchRepositories({}, setIsLoading);
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={formProps => {
        const { handleSubmit } = formProps;

        console.log('formProps', formProps);

        return (
          <form onSubmit={handleSubmit} noValidate={true}>
            <styled.Container>
              <Grid item md={6} sm={12} xs={12}>
                <styled.Paper>
                  <Grid container spacing={3} justify='center'>
                    <Grid item xs={12}>
                      <styled.TitleWrapper>
                        <FontAwesomeIcon icon={faSearch} size='2x' />
                        <Typography variant='h6'>Buscar repositórios por linguagem</Typography>
                      </styled.TitleWrapper>
                    </Grid>
                    <Grid item xs={12}>
                      <styled.SearchWrapper>
                        <Field
                          component={ReactSelectAdapter}
                          options={[
                            { value: 'Javascript', label: 'Javascript' },
                            { value: 'Go', label: 'Go' },
                            { value: 'PHP', label: 'PHP' },
                            { value: 'Rust', label: 'Rust' },
                            { value: 'Typescript', label: 'Typescript' },
                            { value: 'Node', label: 'Node' },
                          ]}
                          name='languages'
                          isDisabled={isLoading}
                        />
                        <Button
                          disabled={isLoading}
                          type='submit'
                          endIcon={isLoading ? <CircularProgress size={15} /> : null}>
                          {isLoading ? 'Buscando' : 'Buscar'}
                        </Button>
                      </styled.SearchWrapper>
                    </Grid>
                  </Grid>
                </styled.Paper>
              </Grid>
            </styled.Container>
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
