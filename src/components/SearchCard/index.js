import React from 'react';

//UI
import { Grid, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import * as styled from './index.style';

//REDUX
import { connect } from 'react-redux';
import repositoriesActions from '../../redux/repositories/actions';

const SearchCard = props => {
  const onSearch = () => {
    props.fetchRepositories();
  };

  return (
    <styled.Container>
      <Grid item md={6} sm={12} xs={12}>
        <styled.Paper>
          <Grid container spacing={3} justify='center'>
            <Grid item xs={12}>
              <styled.TitleWrapper>
                <FontAwesomeIcon icon={faSearch} size='2x' />
                <Typography variant='h6'>Buscar repositórios</Typography>
              </styled.TitleWrapper>
            </Grid>
            <Grid item xs={12}>
              <styled.Button disabled={props.isLoading} onClick={onSearch}>
                {props.isLoading ? 'Buscando...' : 'Buscar'}
              </styled.Button>
            </Grid>
          </Grid>
        </styled.Paper>
      </Grid>
    </styled.Container>
  );
};

const { fetchRepositories } = repositoriesActions;

export default connect(
  state => ({
    list: state.Repositories.list,
    isLoading: state.App.isLoading,
  }),
  { fetchRepositories }
)(SearchCard);
