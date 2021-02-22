const actions = {
  FETCH_REPOSITORIES_REQUEST: 'FETCH_REPOSITORIES_REQUEST',
  FETCH_REPOSITORIES_SUCCESS: 'FETCH_REPOSITORIES_SUCCESS',

  fetchRepositories: (payload, switchLoading) => ({
    type: actions.FETCH_REPOSITORIES_REQUEST,
    payload,
    switchLoading,
  }),
};

export default actions;
