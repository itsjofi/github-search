const actions = {
  FETCH_REPOSITORIES_REQUEST: 'FETCH_REPOSITORIES_REQUEST',
  FETCH_REPOSITORIES_SUCCESS: 'FETCH_REPOSITORIES_SUCCESS',

  fetchRepositories: () => ({
    type: actions.FETCH_REPOSITORIES_REQUEST,
  }),
};

export default actions;
